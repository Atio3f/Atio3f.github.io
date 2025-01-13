/*
     _______.     ___       _______     ___        ___    _  _    
    /       |    /   \     |   ____|   |__ \      / _ \  | || |   
   |   (----`   /  ^  \    |  |__         ) |    | | | | | || |_  
    \   \      /  /_\  \   |   __|       / /     | | | | |__   _| 
.----)   |    /  _____  \  |  |____     / /_   __| |_| |    | |   
|_______/    /__/     \__\ |_______|   |____| (__)\___/     |_|   

GIBELLO Grégoire E1
FERNANDES Mathias E2

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*   ~ PREMIERES REQUETES DE TRI :      */


/* Selection de toutes les origines possibles pour les produits de France et dom-tom : */

SELECT DISTINCT(countries_tags)
FROM openfoodfacts
WHERE LOWER(countries_tags) SIMILAR TO 'fr:(dom-tom|en-fr|francia)|en:(france|francia|frankreich|guadeloupe|martinique|guyane|mayotte|reunion|saint-pierre-and-miquelon|saint-barthélemy|saint-martin|wallis-and-futuna|french-polynesia|new-caledonia|french-guiana|frankrijk)';


/* tri de tous les produits qui n'ont pas de nutriscore */

SELECT product_name
FROM openfoodfacts
WHERE nutriscore_grade IS NOT NULL
AND nutriscore_grade != 'unknown'
AND nutriscore_grade != 'not-applicable';


/* Selection des produit dans la catégorie 'volaille' avec un code long de 13 chiffres, et sans erreur de qualité :*/

SELECT product_name
FROM openfoodfacts
WHERE LENGTH(code) = 13
AND food_groups='en:poultry'
AND data_quality_errors_tags IS NULL;


/* Tri des colonnes des valeures nutritionnelles */

SELECT product_name
FROM openfoodfacts
WHERE sodium_100g BETWEEN 0 AND 100
AND saturated_fat_100g BETWEEN 0 AND 100
AND fat_100g BETWEEN 0 AND 100
AND sugars_100g BETWEEN 0 AND 100
AND proteins_100g BETWEEN 0 AND 100
AND carbohydrates_100g BETWEEN 0 AND 100
AND energy_100g > 0;


/* Verification si energy_100g est en kJoule ou kClalorie :*/

CREATE TEMPORARY TABLE Nutriscore_calc_energy AS
SELECT product_name, countries_tags, nutriscore_grade, fat_100g, saturated_fat_100g, sugars_100g, proteins_100g, carbohydrates_100g,
energy_100g, salt_100g, sodium_100g 
FROM openfoodfacts
WHERE nutriscore_grade IS NOT NULL
AND nutriscore_grade != 'unknown'
AND nutriscore_grade != 'not-applicable'
AND food_groups='en:poultry'
AND LOWER(countries_tags) SIMILAR TO 'fr:(dom-tom|en-fr|francia)|en:(france|francia|frankreich|guadeloupe|martinique|guyane|mayotte|reunion|saint-pierre-and-miquelon|saint-barthélemy|saint-martin|wallis-and-futuna|french-polynesia|new-caledonia|french-guiana|frankrijk)'
AND sodium_100g BETWEEN 0 AND 100
AND saturated_fat_100g BETWEEN 0 AND 100
AND fat_100g BETWEEN 0 AND 100
AND sugars_100g BETWEEN 0 AND 100
AND proteins_100g BETWEEN 0 AND 100
AND carbohydrates_100g BETWEEN 0 AND 100;
/*
On remarque en faisant la différence entre la valeur réelle et celle que l'on calcule que les données réelles 
se situent entre -300 et 300 de valeur par rapport à nos données calculées lorsque l'on met nos valeurs en kjoul:
SELECT (energy_100g - computed_energy_100g*4.184) AS diff_energy FROM nutriscore ORDER BY diff_energy;

En faisant un rapport pour vérifier l'écart en pourcentage que l'on a au maximum 30% en kjoul tandis qu'on trouve 68% sans convertir nos données en kcal
SELECT ((energy_100g - computed_energy_100g*4.184)/energy_100g)*100 AS diff_energy FROM nutriscore ORDER BY diff_energy;

Egalement en combinant nos pourcentages obtenus juste avant(en kjoul) puis en le divisant avec le total on obtient quasiment 0.4% ce qui est négligeable
SELECT sum((energy_100g - computed_energy_100g*4.184)/energy_100g)/count(*) *100 AS total FROM nutriscore;

Ainsi on en conclut que la colonne energy_100g est en kjoul.

source :  https://www.nhs.uk/live-well/eat-well/food-types/different-fats-nutrition/
          https://openknowledge.fao.org/home
          Convertisseur google : 1kcal = 4.184kjoul   */


/* Selection des elements bio (ou 'organic' en anglais)*/

SELECT labels_tags
FROM openfoodfacts
WHERE lower(labels_tags) LIKE '%bio%' OR lower(labels_tags) LIKE '%organic%';
LIMIT 50;


/*on s'assure que la selection de LIKE '%bio%' ne selectionne pas d'elements contenant des antibiotiques*/

SELECT labels_tags
FROM openfoodfacts
WHERE lower(labels_tags) LIKE '%antibiotique%'
LIMIT 50;


-- Seulement 7 lignes sont concernées, et toutes parlent de 'sans traitement antibiotique'.
-- 7 lignes c'est une goutte d'eau dans un lac : nous pouvons les ignorer

/*Crée une nouvelle colonne pour bio : */

SELECT product_name,
       CASE 
           WHEN LOWER(labels_tags) LIKE '%bio%' OR LOWER(labels_tags) LIKE '%organic%' THEN TRUE
           WHEN labels_tags IS NULL THEN NULL
           ELSE FALSE
       END AS is_organic
FROM openfoodfacts
LIMIT 30;

/*Colonne vegan qui indique si le produit est compatible avec un régime végan*/
SELECT 
    CASE 
            WHEN ingredients_analysis_tags LIKE '%en:vegan%' THEN 't'
            WHEN ingredients_analysis_tags LIKE '%en:non-vegan%' THEN 'f'
            ELSE NULL
        END AS vegan
FROM openfoodfacts
LIMIT 30;


-- Meme chose pour les autres regimes
    
/*colonne level_fat qui indique la quantité de graisse contenue dans le produit*/
SELECT product_name,
       CASE
           WHEN nutrient_levels_tags LIKE '%fat-in-high-quantity%' THEN 'h'
           WHEN nutrient_levels_tags LIKE '%fat-in-low-quantity%' THEN 'l'
           WHEN nutrient_levels_tags LIKE '%fat-in-moderate-quantity%' THEN 'm'
           ELSE NULL
       END AS level_fat
FROM openfoodfacts
LIMIT 30;

-- Meme chose pour les autres valeurs nutritionnelles 


*/

-- Pour la supression des doublons nous utilisons DISTINCT ON (product_name, energy_100g, fat_100g, saturated_fat_100g, sugars_100g, proteins_100g, carbohydrates_100g,salt_100g, sodium_100g)


/* ~ Creation d'une table temporaire avec les données triés : */



CREATE TEMPORARY TABLE poultryFrance AS
    SELECT DISTINCT ON (product_name, energy_100g, fat_100g, saturated_fat_100g, sugars_100g, 
    proteins_100g, carbohydrates_100g,salt_100g, sodium_100g)
    countries_tags,
    nutriscore_grade,
    code,
    url,
    CASE
           WHEN nutrient_levels_tags LIKE '%saturated-fat-in-low-quantity%' THEN 'l'
           WHEN nutrient_levels_tags LIKE '%saturated-fat-in-moderate-quantity%' THEN 'm'
           ELSE NULL
       END AS level_saturated_fat,
       CASE
           WHEN nutrient_levels_tags LIKE '%sugars-in-high-quantity%' THEN 'h'
           WHEN nutrient_levels_tags LIKE '%sugars-in-low-quantity%' THEN 'l'
           WHEN nutrient_levels_tags LIKE '%sugars-in-moderate-quantity%' THEN 'm'
           ELSE NULL
       END AS level_sugars,
       CASE
           WHEN nutrient_levels_tags LIKE '%salt-in-high-quantity%' THEN 'h'
           WHEN nutrient_levels_tags LIKE '%salt-in-low-quantity%' THEN 'l'
           WHEN nutrient_levels_tags LIKE '%salt-in-moderate-quantity%' THEN 'm'
           ELSE NULL
       END AS level_salt,
       CASE 
        WHEN ingredients_analysis_tags LIKE '%en:vegan%' THEN 't'
        WHEN ingredients_analysis_tags LIKE '%en:non-vegan%' THEN 'f'
        ELSE NULL
        END AS vegan,
        CASE 
            WHEN ingredients_analysis_tags LIKE '%en:vegetarian%' THEN 't'
            WHEN ingredients_analysis_tags LIKE '%en:no-vegetarian%' THEN 'f'
            ELSE NULL
        END AS vegetarian,
        CASE 
            WHEN ingredients_analysis_tags LIKE '%en:palm-oil,%' THEN 't'
            WHEN ingredients_analysis_tags LIKE '%en:palm-oil-free%' THEN 'f'
            ELSE NULL 
        END AS palm_oil
    
    FROM openfoodfacts

    WHERE nutriscore_grade IS NOT NULL
    AND nutriscore_grade != 'unknown'
    AND nutriscore_grade != 'not-applicable'
    AND food_groups='en:poultry'
    AND LOWER(countries_tags) SIMILAR TO 'fr:(dom-tom|en-fr|francia)|en:(france|francia|frankreich|guadeloupe|martinique|
    guyane|mayotte|reunion|saint-pierre-and-miquelon|saint-barthélemy|saint-martin|wallis-and-futuna|french-polynesia|new-caledonia|french-guiana|frankrijk)'
    AND data_quality_errors_tags IS NULL
    AND LENGTH(code) = 13
    AND sodium_100g BETWEEN 0 AND 100
    AND saturated_fat_100g BETWEEN 0 AND 100
    AND fat_100g BETWEEN 0 AND 100
    AND sugars_100g BETWEEN 0 AND 100
    AND proteins_100g BETWEEN 0 AND 100
    AND carbohydrates_100g BETWEEN 0 AND 100
    AND energy_100g > 0;

/* Requete pour supprimer cette table */
--DROP TABLE IF EXISTS poultryFrance;


-- Exportation dans un csv :

\COPY poultryFrance TO 'team_e08.csv' WITH CSV DELIMITER E'\t' NULL 'NA' HEADER ENCODING 'UTF8';


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/








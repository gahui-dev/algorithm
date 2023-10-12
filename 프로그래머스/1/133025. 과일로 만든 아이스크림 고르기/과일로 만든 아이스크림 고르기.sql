SELECT FIRST_HALF.FLAVOR
  FROM FIRST_HALF 
 INNER JOIN ICECREAM_INFO
    ON FIRST_HALF.FLAVOR = ICECREAM_INFO.FLAVOR
   AND TOTAL_ORDER > 3000
   AND INGREDIENT_TYPE = 'fruit_based'
 ORDER BY TOTAL_ORDER DESC;
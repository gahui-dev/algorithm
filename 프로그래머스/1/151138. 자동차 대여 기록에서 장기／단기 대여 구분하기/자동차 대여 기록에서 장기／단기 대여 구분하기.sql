# SELECT HISTORY_ID
 #      , CAR_ID
 #      , DATE_FORMAT(START_DATE, '%Y-%m-%d') AS START_DATE
 #      , DATE_FORMAT(END_DATE, '%Y-%m-%d') AS END_DATE
 #      , CASE
 #            WHEN DATEDIFF(END_DATE, START_DATE) + 1 >= 30
 #            THEN '장기 대여'
 #        ELSE '단기 대여' END AS RENT_TYPE
 #  FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
 # WHERE START_DATE BETWEEN '2022-09-01' AND '2022-09-30'
 # ORDER BY HISTORY_ID DESC;


SELECT history_id, car_id
, date_format(start_date, '%Y-%m-%d') as START_DATE
, date_format(end_date, '%Y-%m-%d') as END_DATE
, if(DATEDIFF(END_DATE, START_DATE) + 1 >= 30, '장기 대여', '단기 대여') as rent_type
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where date_format(start_date, '%Y-%m') = '2022-09'
order by history_id desc;
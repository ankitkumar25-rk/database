mongoimport --db <db_name> --collection <collection_name> --file <file_name>

mongoimport --db <db_name> --collection <collection_name> --file <file_name> --jsonArray

mongoexport --db <db_name> --collection <collection_name> --out <file_name>

# if data in array format

mongoexport --db <db_name> --collection <collection_name> --out <file_name> --jsonArray

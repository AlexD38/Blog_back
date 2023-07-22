## Credentials for db connection : 

export PGUSER=XXX
export PGPASSWORD=XXX
export PGDATABASE=XXX

# init configuration
#bash init_db.sh

# create tables 
psql -f ./data/tables.sql

#seed database
psql -f  ./data/data.sql

#functions
psql -f ./data/functions/getNextAppointments.sql
psql -f ./data/functions/quickView.sql

#views
 psql -f ./data/views/views.sql
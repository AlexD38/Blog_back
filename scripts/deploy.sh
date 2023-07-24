## Credentials for db connection : 

export PGUSER='blog'
export PGPASSWORD='blog'
export PGDATABASE='blog'

# init configuration
#bash init_db.sh

# create tables 
psql -f ./data/tables.sql

#seed database
psql -f  ./data/data.sql

# #functions
# psql -f ./data/functions/getNextAppointments.sql
# psql -f ./data/functions/quickView.sql

# #views
#  psql -f ./data/views/views.sql
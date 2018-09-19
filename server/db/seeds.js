use bucket_list;
db.dropDatabase();

db.wishes.insertMany([
  {
  "name": "learn French",
  "deadline": "31/12/2020",
  "priority": "medium",
  "achieved": "no"
},
{
  "name": "sky dive",
  "deadline": "31/12/2050",
  "priority": "low",
  "achieved": "no"
},
{
  "name": "finish CodeClan",
  "deadline": "31/12/2018",
  "priority": "high",
  "achieved": "no"
}]
);

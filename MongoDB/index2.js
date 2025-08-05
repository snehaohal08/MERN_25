// // db.employee.updateOne(
//   { ename: "sneha" },
//   { $set: { salary: 20000 } }
// )

// replaceOne: all document are removed and update in new documnet
// db.employee.replaceOne({ename:"sneha"},{ename:"sneha ohal"})

//account department madle employee ch data display karayach
// db.employee.findOne({department:"CA"})

// $project
// db.employee.aggregate([{$project:{_id:1,ename:1,slary:1}}])

// $filter, $limit, $unwind , $project
// We use $cond when we want to check a condition and return a value based on whether it's true or false. cond = conditional
db.employee.aggregate([
  { $unwind: "$sales" },
  {
    $project: {
      ename: 1,
      salesofmonth: {
        $filter: {
          input: "$sales.july",
          as: "sal",
          cond: { $gte: ["$$sal", 5] }
        }
      }
    },
  },
  {$limit:2}
])
// $limit
db.employee.aggregate([{$limit:2}])

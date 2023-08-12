// const express = require('express');
// const Course = require('../models/course');


// const router = express.Router();

// // Route to get all courses
// router.get('/', async (req, res) => {
//   try {
//     res.json(await Course.find({}));
//   } catch (error) {
//     res.status(400).json(error);
//   }

// });

//  // CREATE ROUTE
//  router.post("/", async (req, res) => {
//   try {
//     // send all people
//     res.json(await Course.create(req.body));
//   } catch (error) {
//     //send error
//     res.status(400).json(error);
//   }
// });

// // the below add this data to my database

// // router.get("/seed", async (req, res) => {
// //   try {
// //     // send all people
// //     console.log("any string")
// //     let course = await Course.insertMany(data)
// //     console.log(course)
// //     res.redirect("/api/courses");
// //   } catch (error) {
// //     //send error
// //     res.status(400).json(error);
// //   }
// // });


// // SHOW ROUTE
// router.get("/:id", async (req, res) => {
//     try {
//         // get people by ID
//         res.json(await Course.findById(req.params.id));
//       } catch (error) {
//         //send error
//         res.status(400).json(error);
//       }
// });

// // UPDATE ROUTE
// router.put("/:id", async (req, res) => {
//   try {
//     // update people by ID
//     res.json(
//       await Course.findByIdAndUpdate(req.params.id, req.body, {new:true})
//     );
//   } catch (error) {
//     //send error
//     res.status(400).json(error);
//   }
// });

// //DELETE ROUTE
// router.delete("/:id", async (req, res) => {
//   try {
//     // delete people by ID
//     res.json(await Course.findByIdAndRemove(req.params.id));
//   } catch (error) {
//     //send error
//     res.status(400).json(error);
//   }
// });





// module.exports = router;


const express = require('express');
const Course = require('../models/course'); // Import your Course model

const router = express.Router();

// Route to get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(400).json(error);
  }
});

// CREATE ROUTE
router.post('/', async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.json(newCourse);
  } catch (error) {
    res.status(400).json(error);
  }
});

// SHOW ROUTE
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      res.status(404).json({ message: 'Course not found' });
    } else {
      res.json(course);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

// UPDATE ROUTE
router.put('/:id', async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCourse) {
      res.status(404).json({ message: 'Course not found' });
    } else {
      res.json(updatedCourse);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndRemove(req.params.id);
    if (!deletedCourse) {
      res.status(404).json({ message: 'Course not found' });
    } else {
      res.json(deletedCourse);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;


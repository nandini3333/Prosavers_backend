// const { Home } = require("../Model/Schema")

// const HomeDataInsert = async (req, res) => {
//     const HomeData = req.body

//     try {
//         const HomeDataDoc = new Home({
//             content: HomeData.content,
//             image: HomeData.image,
//             created: Date.now()
//         })

//         const dbResponse = await HomeDataDoc.save()
//         console.log("Data is saved", dbResponse)
//         return res.status(200).send(dbResponse)
//     } catch (error) {
//         console.log("Error while operating on db =>", error.message)
//         return res.status(500).send({ message: "Error while operating on db" })
//     }

// }

// const HomeDataFind = async (req,res) => {
//     try{
//         const result = await Home.find({})
//         console.log(result)
//         return res.status(200).send(result)
//     }
//     catch(error){
//         console.log("something wrong in db operations", error)
//         return res.status(500).send({ message: "something wrong in db operations" })
//     }  
// }


// module.exports={HomeDataInsert,HomeDataFind }
// const Images = require("../Controllers/Images")
const HomeData = (req,res) => {
    res.send([
        {
           "id" : "1",
           "image":"http://localhost:8080/Images/image1.png",
           "content":"I HAVE NEVER INVESTED EXCEPT IN TRADITIONAL SAVINGS"
        },
        {
            "id":"2",
            "image":"http://localhost:8080/Images/image2.png",
            "content":"I AM N0T SURE IF I HAVE MADE THE RIGHT INVESTMENT"
        },
        {
            "id":"3",
            "image":"https://prosavers.in/wp-content/uploads/2020/12/22-Home-Page_Current-Situation-C.png",
            "content":"HAVE I THE RIGHT PORTFOLIO MIX OF VARIOUS ASSET CLASSES?"
        },
        {
            "id":"4",
            "image":"http://localhost:8080/Images/image4.png",
            "content":"CAN I ACHIEVE MY GOALS WITH MY CURRENT INVESTMENTS?"
        }

    ])
}

module.exports.apicontroller = HomeData
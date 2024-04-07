const LoansData = (req, res) => {

    res.send([
        {
         "id":"1",
         "title":"Home Loan",
         "image":"https://images.moneycontrol.com/static-mcnews/2022/09/Home-Loan-1.png?impolicy=website&width=1600&height=900",
         "content":"Home is where your loved ones are. Let it also be something you own."
        },
        {
            "id":"2",
            "title":"Personal Loan",
            "image":"https://as1.ftcdn.net/v2/jpg/01/82/97/00/1000_F_182970024_KIvO67gGHQUxpVPIdgGi2Iw7QBmdgyyr.jpg",
            "content":"Some people frown upon personal loans. But, they rarely understand others’ needs."
        },
        {
            "id":"3",
            "title":"Business Loan",
            "image":"https://img.freepik.com/free-photo/young-happy-couple-meeting-with-financial-advisor-office-woman-is-handshaking-with-agent_637285-3904.jpg?w=740&t=st=1703428478~exp=1703429078~hmac=034244445d8a388c42ed0416f5a32854c1bf0b092fa54e458c4dfcbad3081d9b",
            "content":"When you run a business, you support the society. Get the help when you need it most."
        },
        {
            "id":"4",
            "title":"Mortgage Loan",
            "image":"https://img.freepik.com/premium-photo/house-sales-representatives-sales-representatives-recommend-housing-details-project-customers-who-are-interested-viewing-houses-project-real-estate-trading-concept_528263-5110.jpg?w=740",
            "content":"What good is an asset when you cannot help you meet your critical financial needs?"
        }
    ])
}

module.exports.apicontroller = LoansData
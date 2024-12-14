import axios from "axios";

class triviaService  {
    constructor(
    ){
        this.baseUrl= "https://opentdb.com/api.php?amount=10";
    }

    async getTrivia() {
        try{

            const response = await axios('https://opentdb.com/api.php?amount=10');
            console.log(response.data)
            return this.manageInfo(response?.data) 
        }
        catch (error) {
            console.error('error',error);
            return null
        }
    }

    manageInfo(triviaQuestions) {
        
        return triviaQuestions.results
    }

}

export default triviaService;



const express = require('express')
const route = express.Router()
var Hashmap = require('hashmap');

route.get('/game/start',(req,res)=>{
    
        // const {player1 , player2 , player3 ,player4} = req.body;
        const player1 = "rock" , player2 = "rock" , player3 = "paper" , player4 = "scissor"
var result;
        let hm = new Hashmap()
        hm.set("rock",2);
        hm.set("scissor",1);
        hm.set("paper",0);
        var arr1 = [0,0,0,0]
        var arr2 = [0,0,0,0]
        var arr3 = [0,0,0,0]
        var arr4 = [0,0,0,0]
        var data = []
        for(var i = 0;i<50;i++){
        var a = hm.get(player1)
        var b = hm.get(player2)
        var c = hm.get(player3)
        var d = hm.get(player4)

           
        

        // rock rock paper scissor;
        // paper rock scissor rock;
        // scissor paper rock scissor;
        for(var x = 0;x<4; x++){

// iter 1

            if(x == 0){

                console.log("X Times at 0")

                if(a == 2)
                {
                    console.log("X Times at 2")
                    if(b == 1){
                        arr1[1]+=1;
                    } if(c == 1){
                        arr1[2]+=1;
                    } if(d == 1){
                        console.log("Executed at D")
                        arr1[3]+=1;
                        console.log(arr1[3]  +  " Kjkldsajlf")
                    }
                }

                else if(a == 1)
                {
                    console.log("X Times at 1")
                    if(b == 0){
                        arr1[1]+=1;
                    } if(c == 0){
                        arr1[2]+=1;
                    } if(d ==0){
                        arr1[3]+=1;
                    }
                }


                else if(a == 0){
                    console.log("X Times at 0")
                    if(b == 2){
                        arr1[1]+=1;
                    } if(c == 2){
                        arr1[2]+=1;
                    } if(d ==2){
                        arr1[3]+=1;
                    }
                }


            }


// iter 2

           else if(x == 1){
                if(b == 1)
                {
                    console.log("B Times")
                    if(a == 0){
                        
                        arr2[0]+=1;
                    } if(c == 0){
                        arr2[2]+=1;
                    } if(d ==0){
                        arr2[3]+=1;
                    }
                }

                else if(b == 0)
                {
                    if(a == 2){
                        arr2[0]+=1;
                    } if(c == 2){
                        arr2[2]+=1;
                    } if(d ==2){
                        arr2[3]+=1;
                    }
                }

                
                else if(b == 2){
                    console.log("B Times at Rock")
                    if(a == 1){
                        arr2[0]+=1;
                    } if(c == 1){
                        arr2[2]+=1;
                    } if(d ==1){
                        arr2[3]+=1;
                    }
                }


            }




            //iter 3



            else if(x == 2){
                if(c == 1)
                {
                    if(a == 0){
                        arr3[0]+=1;
                    } if(b == 0){
                        arr3[1]+=1;
                    } if(d ==0){
                        arr3[3]+=1;
                    }
                }

                else if(c == 0)
                {
                    if(a == 2){
                        arr3[0]+=1;
                    } if(b == 2){
                        arr3[1]+=1;
                    } if(d ==2){
                        arr3[3]+=1;
                    }
                }

                
                else if(c == 2){
                    if(a == 1){
                        arr3[0]+=1;
                    } if(b == 1){
                        arr3[1]+=1;
                    } if(d ==1){
                        arr3[3]+=1;
                    }
                }


            }


// iter 4

else if(x == 3){
    if(d == 1)
    {
        if(a == 0){
            arr4[0]+=1;
        } if(c == 0){
            arr4[2]+=1;
        } if(b ==0){
            arr4[1]+=1;
        }
    }

    else if(d == 0)
    {
        if(a == 2){
            arr4[0]+=1;
        } if(c == 2){
            arr4[2]+=1;
        } if(b ==2){
            arr4[1]+=1;
        }
    }

    
    else if(d == 2){
        if(a == 1){
            arr4[0]+=1;
        } if(c == 1){
            arr4[2]+=1;
        } if(b ==1){
            arr4[1]+=1;
        }
    }


}

 
      

        }

       
data = data.concat(arr1,"\n",arr2 ,"\n", arr3 ,"\n", arr4 , "\n")






    }        
    return res.json(data)
   
   
       
   
    
})




module.exports = route
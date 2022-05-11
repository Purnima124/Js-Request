const axios = require('axios');
const fs=require('fs')
const r=require("readline-sync")
const saral_API=axios.get('https://api.merakilearn.org/courses ')
    .then(  Response=>{
        var data=(Response.data)
        let json_file=JSON.stringify(data,null,5)
        fs.writeFileSync("Merakileran_Data.json",json_file)
        // let all_data=data
        serial_number=1
        // name_array=[]
        for (i of data){
        console.log(serial_number,i["name"],i["id"])
        serial_number+=1
        // name_array.push(i.name,i.id)
        } 
    let input=r.question("Enter the topic number")
    const ID=data[input-1]['id']
    console.log(data[input-1]['name'],ID)
    saral1=('https://api.merakilearn.org/courses/'+String(ID)+'/exercises')
    // saral=axios.get(saral1).then((resp)=>{
    saral=axios.get(saral1)
    .then((resp)=>{
        var data1=(resp.data)
        let json_file=JSON.stringify(data1,null,5)
        // console.log(json_file)
        fs.writeFileSync("Merakileran_Data2.json",json_file)
        course_ques=json_file.course.exercises
        serial1=1
        for(k=0;k<course_ques.length;k++){
            console.log(serial1+".",course_ques[k].name)
            serial1++
        } 
        var n=require("readline-sync")
        let user=n.questionInt("enter the vlue :")
        let name=course_ques
        for (let k=0;k<name[user].content.length;k++){
            console.log(name[user].content[k].value)
        
        }
    }).catch(error=>{
        console.log(error)
    })

}).catch(error=>{
    console.log(error)
})
    

// })

            // serial_number2=[]
            // array=[]
            // array2=[]
        // course_ques=saral.exercises
        // for(j=0;j<saral["data"].length;j++){
        //     console.log(serial1,".",j["name"])
        //     serial1++
        // for (j of json_file["course"]['/exercises']){
            // if (j ["parent_exercises_id"]==None){
            //     console.log(serial_number2,j["name"])
            //     console.log("    ",serial1,j["slug"])
            //     serial_number+=1
            //     array.push(j)
            //     array2.push(j)

            // }
            // if (j["parent_exercises_id"]==j["id"]){
            //     console.log(serial_number2,j["name"],j["id"])
            //     serial_number2+=1
            //     new_no=1
            //     array.push(i)
            //     // for(t of json_file ["course"]["exercises"]){
            //     for(j=0;j<course_ques.length;j++)
            //         if(j["parent_exercises_id"]==j["id"]){
            //             console.log("    ",new_no,j["name"])
            //             serial1++
            //             new_no+=1
            //             array2.push(k)
            //             break
                    // }

                // }
                

            // }


        // }
                

        // }

        
//     }
//         )
    
// })
    

    
console.log("test");
getWorks()
async function getWorks(){
    const response = await fetch('http://localhost:5678/api/works')
    const works = await response.json()
    console.log(works)
    for(const work of works){
        console.log(work)
    }
}
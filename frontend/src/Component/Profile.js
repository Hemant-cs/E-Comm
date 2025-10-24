
export default function Profile(){
    const userData = JSON.parse(localStorage.getItem("User"));
    return(
        <div style={{marginTop: "100px", marginLeft: "40%"}}>
            <h1 style={{fontStyle: "italic"}}>User Details...!</h1>
            <h3>Name : {userData.fullName}</h3>
            <h3>Email : {userData.email}</h3>
        </div>
    )
}
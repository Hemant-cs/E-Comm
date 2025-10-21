
export default function Profile(){
    const userData = JSON.parse(localStorage.getItem("User"));
    return(
        <>
        <h1>User Details</h1>
        <h3>Name : {userData.fullName}</h3>
        <h3>Email : {userData.email}</h3>
        </>
    )
}
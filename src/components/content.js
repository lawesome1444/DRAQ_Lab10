function Content(){
    //Pass some h1 tagged example text, then pass the current time on page load/refresh
    return(
        <div>
            <h1>Hello world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}
export default Content;


const ShowAndHide = (props) => {

    console.log(props.id.newId);

    if (props.id.newId == 'python') {
        return (
            <div>
                <div id={props.id.newId}>
                    <h1>Python</h1>
                    <p>
                        Python is quite flexible, there are no strict rules when building applications and we can solve problems through a different methodology.
                        Python language is in great demand in the field of data science.
                        It can be easily integrated into applications with functionalities that affect machine learning.
                        It is easy to learn. Its syntax is easy and code is very readable,
                        has a lot of applications and it's used for developing web applications, data science, rapid application development, and so on.
                        Python allows you to write programs in fewer lines of code than most of the programming languages.
                        The popularity of Python is growing rapidly. Now it's one of the most popular programming languages.
                    </p>
                </div>
            </div>
        )
    } else if (props.id.newId == 'csharp') {
        return (
            <div id={props.id.newId}>
                <h1>C#</h1>
                <p>
                    It is one of the most famous programming languages and is easy to learn and get into, since it keeps you going.
                    There are many features, quality tools and you can save codes also.
                    You can create web sites, desktop applications and games. C# is highly applicable and highly sought after.
                    It has a huge community, besides a C# related question is more likely to be answered quickly.
                </p>
            </div>
        )
    } else if (props.id.newId == 'java') {
        return (
            <div id={props.id.newId}>
                <h1>Java</h1>
                <p>
                    Java is a universal programming language that is free and has an open source.
                    You can make web applications like Android and big data ones, witch are connected with a database. 
                    It is a highly typified object-oriented platform-independent language. We can write Java code in one platform and run it in another.
                    It is a general-purpose language with a wide range of applications.
                    It helps in code reusability.
                </p>
            </div>
        )
    } else if (props.id.newId == 'javascr') {

        return (
            <div id={props.id.newId}>
                <h1>JavaScript</h1>
                <p>
                    JavaScript is both client-side and server-side programming language. In the client-side, the code is run and displayed by the browser. On the server-side, Node.js is used.
                    It is a platform-independent language. Any browser supporting JavaScript can run the code irrespective of the operating system.
                    JavaScript uses the just-in-time compilation technique. Since the compilation is handled at run time, JavaScript is considered an interpreted language.
                    It is a dynamically typed language. That is, a variable containing number may be reassigned to a string.
                    It's easy to start on, it's easy to learn, but it's hard to be good because it doesn't keep you from making mistakes.
                </p>
            </div>
        )
    } else if (props.id.newId == 'clogo') {
        return (
            <div id={props.id.newId}>
                <h1>C++</h1>
                <p>
                    C++ is used to develop games, desktop apps, operating systems, browsers, and so on because of its performance.
                    After learning C++, it will be much easier to learn other programming languages like Java, Python, etc.
                    C++ helps you to understand the internal architecture of a computer, how computer stores and retrieves information.
                </p>
            </div>
        )
    } else if (props.id.newId == 'kotlin') {
        return (
            <div id={props.id.newId}>
                <h1>Kotlin</h1>
                <p>
                    Kotlin is 100 percent interoperable with Java. Hence your Java/Android code works with Kotlin.
                    Kotlin allows you to cut off the lines of code by approximately 40% (compared to Java).
                    Learning Kotlin is easy. It is particularly easy if you already know Java.
                    Kotlin is tool-friendly. You can use any Java IDE or command line to run Kotlin.
                </p>
            </div>
        )
    }
    else {
        return (
            <div className="elseLanguages">
                <h1>Click on the icons for more info!</h1>
            </div>
        )
    }



}

export default ShowAndHide;



// 

// 

// <div id={props.id.newId}>
// <h1>JS</h1>
// <p>this is some random text about js</p>
// </div>

// <div id={props.id.newId}>
// <h1>C++</h1>
// <p>this is some random text about c++</p>
// </div>
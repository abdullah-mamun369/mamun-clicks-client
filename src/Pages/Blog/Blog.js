import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 my-10'>
            <div className="card w-full glass">
                <figure><img src="https://i.postimg.cc/YCXpXMpn/pexels-sergei-starostin-6466141.jpg" alt="some boring text" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. QL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used. Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. Flavors of NoSQL vary far more across their attendant systems, so comparison can be more useful between multiple non-relational technologies vs. SQL generally. Apache CouchDB, like MongoDB, is a document-oriented database with JSON schemata and querying over JavaScript. CouchDB’s scaling capabilities stand out, employing a multi-master architecture over the typical single-master distributed design.
                    </p>

                </div>
            </div>
            <div className="card w-full glass">
                <figure><img src="https://i.postimg.cc/8zxYk0wk/pexels-realtoughcandycom-11035363.jpg" alt="some boring text!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                        Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
                        Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.
                        Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.
                    </p>

                </div>
            </div>
            <div className="card w-full glass">
                <figure><img src="https://i.postimg.cc/TPP9nqwL/pexels-realtoughcandycom-11035380.jpg" alt="some boring text!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and Node JS?</h2>
                    <p> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                    </p>

                </div>
            </div>
            <div className="card w-full glass">
                <figure><img src="https://i.postimg.cc/v8Wx0gC0/72d4-article-210902-node-js-body-text.png" alt="some boring text!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How does Node JS handle multiple requests at the same time?</h2>
                    <p>Node took a slightly different approach to handling multiple concurrent requests at the same time if you compare it to some other popular servers like Apache. Spawning a new thread for each request is expensive. Also, threads are doing nothing when awaiting other operations’ result (i.e.: database read). That’s why Node is using one thread instead. Such an approach has numerous advantages. No overhead comes with creating new threads. Also, your code is much easier to reason about, as you don’t have to worry about what will happen if two threads access the same variable. It’s because that simply cannot happen. There are some drawbacks as well. Node isn’t the best choice for applications that mostly deal with CPU intensive computing. On the other hand, it excels at handling multiple I/O requests. So, let’s focus on this part for a bit.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;

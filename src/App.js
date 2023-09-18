import React from 'react';

const users = [
    {
        fullName: "Shahriar Hossain",
        age: 28,
        phones: [
            { home: "01750262" },
            { office: "08902078" }
        ]
    },
    {
        fullName: "Sadia Hossain",
        age: 21,
        phones: [
            { home: "01310262" },
            { office: "08955578" }
        ]
    }
]


export default function App()
{
    return <div>
        <h1>Nested Lists</h1>
        {
        users.map((user, index) =>
            <div key={index}>
                <h3>FullName: {user.fullName}</h3>
                <p>Age: {user.age}</p>
                {
                    user.phones.map((phone, index) =>
                        <div key={index}>
                            <p>{phone.home}</p>
                            <p>{phone.office}</p>
                        </div>)

                }
            </div>)
        }
    </div>
}
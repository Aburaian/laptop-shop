import React from 'react';

const ReactAnswer = () => {
    return (
        <div>
            <h1>react <span>question</span></h1>

            <h3>1.how react works?</h3>
            <p>React হল একটি জাভাস্ক্রিপ্ট লাইব্রেরি (কোন ফ্রেমওয়ার্ক নয়) যা ঘোষণামূলক কোড ব্যবহার করে দ্রুত লোডিং করা বিরামহীন ব্যবহারে অভিজ্ঞতা সম্পন্ন Single Page Application তৈরিতে ব্যবহার করা হয়। এটি ব্যবহারে ফলে ব্যান্ডউইথ কম ব্যবহার করা হয় এবং নিরাপত্তা বিষয়ক। এছাড়া অনুমানযোগ্য এবং দক্ষ উপায়ে ব্যবহারকারী ইন্টারফেস (UIs) তৈরি করে। এটি ছয়টি বিষয়ের উপর ভিত্তি করে তার কার্যক্রম করে। নিন্মে আলোচনা করা হল:
                <li>JSX = Javascript Xml</li>
                <li>Component = similar look different data</li>
                <li>Props = এই হিসেবে ডাটা Recive করে</li>
                <li>useState = state সেট করে মানে নতুন ভ্যালু রাখে</li>
                <li>useEffect = data fetch করে</li>
                <li>event hander = কোন বাটনে ক্লিক করে কোন কিছু open করে ওয়েবসাইটের দারুণ ইন্টারফেস ও ইন্টারটেটিক করে তোলে </li>
            </p>
            <h3>2.Props vs State</h3>
            <p>props: props read only. its can not be modifid.এছাড়া props value chance করতে পারে না। ডাটা Recive  করে এবং সেই হিসেবে পাঠায়</p>
            <p>state: State changes can be asynchonus. sate can be modified using this set state. state value সংরক্ষন ও নতুন value set করতে পারে। এছাড়া value এর মান পরিবর্তন করতে পারে।</p>
        <h3>3.how use state work?</h3>
        <p>React এ প্রতিটি Component তিনটি ‍stage অতিক্রম করে। বলা হয়ে থাকে এই তিনটি উপরেই React কাজ করে। খুব দ্রুত সময় কমিয়ে এক পেইজের ওয়েবপেইজ তৈরি করে। তিনটি নাম হলো
            <li>Mounting: কোন Componet যখন dom এ প্রবেশ করে তখন এই state কাজ শুরু করে।</li>
            <li>Updating: কোন Componet যখন কোন কিছু পরিবর্তন করে এবং নতুন কিছু যোগ বা update করে তখন এই state কাজ করে। </li>
            <li>UnMounting: যখন dom থেকে কোন Component সরানো বা ডিলেট করার প্রয়োজন হয় তখন এই state কাজ করে।</li>
        </p>
        </div>
    );
};

export default ReactAnswer;
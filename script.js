
const makeHomework = (course, callback) => {
  setTimeout(function() {
    console.log(`Okay, ok, i'm going to do my ${course} homework now`);
    callback();
}, 3000)
};


const doneWithHomework = () => {
  console.log("Look, mom/dad, I'm done with my homework");
};


makeHomework('math', doneWithHomework);




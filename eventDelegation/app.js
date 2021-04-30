//This will only remove lis that are already on the webpage and it
//will not remove newly added lis
// const lis = document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     })
// }

const commentForm = document.querySelector('#commentForm');
const commentContainer = document.querySelector('#comments');

commentForm.addEventListener('submit', function(e){
    // prevents the default behavior of an event. When a form is submitted
    // the default behavior is for a request to be made to the action of the 
    // form for the data to be sent. 
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const commentInput = document.querySelectorAll('input')[1];
    
    const usernameInput = commentForm.elements.username;
    const commentInput = commentForm.elements.comment;
    addComment(usernameInput.value, commentInput.value);
    usernameInput.value = '';
    commentInput.value = '';
});

const addComment = (username, comment) => {
    //create an empty li
    const newComment = document.createElement('li');

    //create a bold tag
    const boldElement = document.createElement('b');

    // add username to bold tag
    boldElement.append(username);

    // add bold tag to li
    newComment.append(boldElement);

    // add comment to li
    newComment.append(`- ${comment}`);

    // add new comment to webpage
    commentContainer.append(newComment);
}

//This will delete the old and newly added comments that are lis
commentContainer.addEventListener('click', function(e) {
    e.target.nodeName === 'LI' && e.target.remove(); 
})
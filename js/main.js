// Add Event listener to the Submit Button
document.getElementById('submit-button').addEventListener('click', function(){
    // Get the input Value from the Text Area
    const commentBox = document.getElementById('post-comment');
    const commentValue = commentBox.value
    // console.log(comemntValue);
    const commentContainer = document.getElementById('comment-section');
    // console.log(commentContainer);
    
    // Create Element for Appending to the main HTML
    const p = document.createElement('p');
    p.innerText = commentValue;
    // Append to the Main HTMl
    commentContainer.appendChild(p);

    // Clear the Box after submitting the comment
    commentBox.value = '';
})
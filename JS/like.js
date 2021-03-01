function getLikeCount(postID) {
    var thisPostRef = new Firebase(firebaseURL + postID + '/like-count/');
    thisPostRef.once('value', function(snapshot) {
        if ( snapshot.val() ) {
            document.querySelector('#' + postID + ' .like-count').innerHTML = snapshot.val() + ' likes';
        } else {
            return false;
        }
    });
}

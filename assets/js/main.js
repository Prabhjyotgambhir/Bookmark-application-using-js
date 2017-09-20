//Listen for form submition

document.getElementById('myForm').addEventListener('submit',saveBookmark); 

function saveBookmark(e) {
	//Get form values
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;

	var bookmark = {
		name : siteName,
		url : siteUrl
	}

	//localstorage store data
	
	if(localStorage.getItem('bookmarks')===null) {
		//Init array
		var bookmarks = [];

		//add to array
		bookmarks.push(bookmark);

		//set to localstorage
		localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
	} else {
		//fetch from localstorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		//add bookmark to array

		bookmarks.push(bookmark);

		//reset back to localstorage
		localStorage.setItem('bookmarks',JSON.stringify(bookmarks));	

	}

	e.preventDefault();  //It prevents the form submitting
}




//Fetch Bookmark

	function fetchBookmark() {
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		console.log(bookmarks);
	}
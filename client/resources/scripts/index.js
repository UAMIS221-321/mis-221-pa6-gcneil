//populates the website with book data when it loads
function handleOnLoad(){
    populateList();
}

//handles on the change
function handleOnChange(){
    const selectedID = document.getElementById("selectListBox").value;
    bookList.forEach((book)=>{
        if(book.id == selectedID){
            myBook = book;
        }

        })
        populateForm();
    };
    
    //edits part of the book
    function handleEditClick(){
        makeEditable();
        hideButtons();
        var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myBook.id+")\">Save</button>"
        buttonHtml+= "<button class=\"btn btn-primary btn-lg\" onclick=\"handleCancelSave()\">Cancel</button>"
        document.getElementById("saveButton").innerHTML = buttonHtml;
        document.getElementById("saveButton").style.display = "inline-block";

    }

    //handles making a new book in the system
    function handleNewClick(){
        makeEditable();
        hideButtons();
        blankFields();
        var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
        buttonHtml+= "<button class=\"btn btn-primary btn-lg\" onclick=\"handleCancelSave()\">Cancel</button>"
        document.getElementById("saveButton").innerHTML = buttonHtml;
        document.getElementById("saveButton").style.display = "inline-block";
    }

    //handles the rent button being pressed
    function handleRentClick(){
        myBook.numAvlb--;
        document.getElementById("bookAvlb").value = myBook.numAvlb;
        putBook(myBook.id);
    }

    //handles the return button being pressed
    function handleReturnClick(){
        myBook.numAvlb++;
        document.getElementById("bookAvlb").value = myBook.numAvlb;
        putBook(myBook.id);
    }

    //handles the delete button being pressed
    function handleDeleteClick(){
        deleteBook();
    }

    function handleCancelSave(){
        populateForm();
        makeReadOnly();
        showButtons();

    }

    function handleEditSave(id){
        putBook(id);
        makeReadOnly();
        showButtons();
    }

    function handleNewSave(){
        postBook();
        makeReadOnly();
        showButtons();
        blankFields();
    }



//changes the elements from readOnly to editable
function makeEditable(){
    document.getElementById("bookTitle").readOnly = false; 
    document.getElementById("bookAuthor").readOnly = false; 
    document.getElementById("bookGenre").readOnly = false; 
    document.getElementById("bookAvlb").readOnly = false; 
    document.getElementById("bookIsbn").readOnly = false; 
    document.getElementById("bookLength").readOnly = false; 
    document.getElementById("bookCover").readOnly = false; 
}

//changes the fields to blank
function blankFields(){
    document.getElementById("bookTitle").value = ""; 
    document.getElementById("bookAuthor").value = ""; 
    document.getElementById("bookGenre").value = ""; 
    document.getElementById("bookAvlb").value = ""; 
    document.getElementById("bookIsbn").value = ""; 
    document.getElementById("bookLength").value = ""; 
    document.getElementById("bookCover").value = "";  
}

//makes the data not editable
function makeReadOnly(){
    document.getElementById("bookTitle").readOnly = true; 
    document.getElementById("bookAuthor").readOnly = true; 
    document.getElementById("bookGenre").readOnly = true; 
    document.getElementById("bookAvlb").readOnly = true; 
    document.getElementById("bookIsbn").readOnly = true; 
    document.getElementById("bookLength").readOnly = true; 
    document.getElementById("bookCover").readOnly = true; 
}

//gets the data and populates the website
function populateForm(){
    document.getElementById("bookTitle").value = myBook.title; 
    document.getElementById("bookAuthor").value = myBook.author; 
    document.getElementById("bookGenre").value = myBook.genre; 
    document.getElementById("bookAvlb").value = myBook.numAvlb; 
    document.getElementById("bookIsbn").value = myBook.isbn; 
    document.getElementById("bookLength").value = myBook.length; 
    document.getElementById("bookCover").value = myBook.cover; 
    var html = "<img class = \"coverArt\" src = \"" + myBook.cover + "\"></img>";
    document.getElementById("picBox").innerHTML = html;
}
//hides buttons
function hideButtons(){
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}

//shows buttons
function showButtons(){
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("deleteButton").style.display = "inline-block";
    document.getElementById("rentButton").style.display = "inline-block";
    document.getElementById("returnButton").style.display = "inline-block";
}



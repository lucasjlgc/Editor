//Customizando toolbar
let toolbaroptions = [
    //text style
    ['bold', 'italic', 'underline','strike'],

    //header for text
    [{header:[1,2,3,4,5,6,false]}],

    //bullet points style
    [{list:'ordered'},{list:'bullet'}],

    //sub and super text
    [{script:'sub'},{script:'super'}],
    
    //indentação
    [{indent:"+1"},{indent:"-1"}],

    //aligment
    [{align:[]}],

    //text size
    [{size:['small','large','huge',false]}],

    //adding image
    ['image','link','video','formula'],


    //adding text color background
    [{color:[]}, {background:[]}],

    //adding font family
    [{font:[]}],

    //adding code snippet or blockquote
    ['code-block','blockquote']

];



// Editor default
var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbaroptions    // Snow includes toolbar by default
    },
  theme: 'snow'
});


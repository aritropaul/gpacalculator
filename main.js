var fieldCount = 1
var totalCredits = 0
var credits = [];
var grades = []
var totalCGPA = 0
$(document).ready(function(){
    $(".gpaval").hide()
    $(".add").click(function(){
        fieldCount = fieldCount + 1;
        var subjectFields = '<div class="row"><div class="six columns"><label for="credits">Credits</label><select class="u-full-width field" id="credits'+fieldCount+'"><option hidden>Select credits</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><div class="six columns"><label for="grade">Grade</label><select class="u-full-width field" id="grade'+fieldCount+'"><option hidden>Select a grade</option><option value="10">S</option><option value="9">A</option><option value="8">B</option><option value="7">C</option><option value="6">D</option><option value="5">E</option><option value="0">F</option><option value="0">N</option></select></div></div>'
        $(".subject").append(subjectFields);
      });
      $(".subject").on('change', '.field', function() {
        var id = this.id
        refreshGPA(id)
    });
});

function add(a, b) {
    return a + b;
}


function refreshGPA(id){
    var index = parseInt(id.substr(-1))
    var what = /(credits|grade)/.exec(id);
    console.log(id)
    if(what[0] == 'credits'){
        credits[index-1] = parseInt($('#'+id).val())
        totalCredits = credits.reduce(add, 0);
    }
    else if(what[0]=='grade'){
        grades[index-1] = parseInt($('#'+id).val())
    }
    if (credits.length == grades.length){
        var totalmarks = 0
        for (i = 0; i < grades.length; i++) { 
            totalmarks += credits[i]*grades[i]
            console.log(totalmarks)
            console.log(totalCredits)
            }
        totalCGPA = totalmarks/totalCredits
        totalCGPA = totalCGPA.toFixed(2);
        console.log(totalCGPA)
        $(".sgpa").html(totalCGPA + '<span class="small">/10</span>')
        $(".gpaval").show()
    }
}
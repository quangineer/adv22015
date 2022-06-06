document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})

function solution(text) {
    newtext = text.split("\n");
    cleartext = newtext.filter(element => {
        return element !== "";
    })

    let x_removed_text1 = [];
    let x_removed_text2 = [];

    for (i = 0; i < cleartext.length; i++) {
        x_removed_text1.push(cleartext[i].replace('x', ' '));
    }

    for (j = 0; j < x_removed_text1.length; j++) {
        x_removed_text2.push(x_removed_text1[j].replace('x', ' '));
    }

    let new_x_removed_text = [];
    for (k = 0; k < x_removed_text2.length; k++) {
        new_x_removed_text.push(x_removed_text2[k].split(" "));
    }

    for (l = 0; l < new_x_removed_text.length; l++) {
        for (m = 0; m < new_x_removed_text[l].length; m++) {
            new_x_removed_text[l][m] = parseInt(new_x_removed_text[l][m]);
        }
    }

    for (n = 0; n < new_x_removed_text.length; n++) {
        new_x_removed_text[n].sort(function (a, b) {
            return a - b;
        });
    }

    let surface_area = [];
    for (p = 0; p < new_x_removed_text.length; p++) {
        surface_area.push(new_x_removed_text[p][0]*new_x_removed_text[p][1]+2*(new_x_removed_text[p][0]*new_x_removed_text[p][1]+new_x_removed_text[p][0]*new_x_removed_text[p][2]+new_x_removed_text[p][2]*new_x_removed_text[p][1]));
    }

    let SUM = surface_area.reduce((x,y) => x+y);

    console.log(SUM);







}



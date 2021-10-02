(function($) // début du pluggin
{
    $.fn.game2048 = function () //function game2048 du pluggin
    {
        // génération du tableau (table, tr, td) vide (rempli de zéros)
        function generate_map() {
            var table = $('<table></table>');
            for (var y = 0; y < 4; y++) {
                var ligne = $('<tr></tr>');
                for (var x = 0; x < 4; x++) {
                    var cases = $('<td>0</td>').attr('x', x).attr('y', y).attr('nbr', 0);
                    ligne.append(cases);
                }
                table.append(ligne);
            }
            return table;

        }

        // génération d'un certain nombre de cases (argument cases) aléatoirement placées sur les cases d'attribut 'nbr=0'
        function generate_case(cases) {
            for (var i = 0; i < cases; i++) {
                var x = Math.floor((Math.random() * 4));
                var y = Math.floor((Math.random() * 4));
                var value = 2 * (Math.floor((Math.random() * 2) + 1));
                var elem = $('[x="' + x + '"][y="' + y + '"][nbr=0]');

                if (value === 4 && Math.random() > 0.5)
                    value = 2;
                if (!elem[0])
                    generate_case(1);
                else {
                    elem.attr('nbr', value);
                    elem.text(value);
                }
            }

        }



        function moveTiles(elemA, elemB, valueB) {
            elemA.attr("nbr", valueB);
            elemA.text(valueB);
            elemB.attr("nbr", 0);
            elemB.text("0");

        }

        function changeBackground(color) {
            document.body.style.background = color;
        }


        function mergeTiles(elemA, elemB, valuA) {
            let sum = valuA * 2;
            elemA.attr("nbr", sum);
            elemA.text(sum);
            elemB.attr("nbr", 0);
            elemB.text("0");
            window.addEventListener("load",function() { changeBackground('red') });


        }



        function move_left() {
            var moved = false;
            for (var y = 0; y < 4; y++) {
                for (var x = 0; x < 4; x++) {
                    var elemA = $('[x=' + x + '][y=' + y + ']');
                    var valueA = parseInt($('[x=' + x + '][y=' + y + ']').attr("nbr"));
                    if (valueA === 0) {
                        for (a = x + 1; a < 4; a++) {
                            var elemB = $('[x=' + a + '][y=' + y + ']');
                            var valueB = parseInt($('[x=' + a + '][y=' + y + ']').attr("nbr"));
                            if (valueB === 0) {
                                continue;
                            } else if (valueB !== 0) {
                                moved = true;
                                moveTiles(elemA, elemB, valueB);
                                x--;
                                break;
                            }

                        }
                    } else if (valueA !== 0) {
                        for (a = x + 1; a < 4; a++) {
                            var elemB = $('[x=' + a + '][y=' + y + ']');
                            var valueB = parseInt($('[x=' + a + '][y=' + y + ']').attr("nbr"));
                            if (valueB === 0) {
                                continue;
                            } else if (valueB !== valueA) {
                                break;
                            } else if (valueB === valueA) {
                                moved = true;
                                mergeTiles(elemA, elemB, valueA);
                                break;
                            }
                        }
                    }
                }
            }
            if (moved === true) {
                generate_case(1);
                if (valueA === valueB){
                    $('.score')
                    console.count('score')
                }
            }

        }

        function move_up() {
            var moved = false;
            for (var x = 0; x < 4; x++) {
                for (var y = 0; y < 4; y++) {
                    var elemA = $('[x=' + x + '][y=' + y + ']');
                    var valueA = parseInt($('[x=' + x + '][y=' + y + ']').attr("nbr"));
                    if (valueA === 0) {
                        for (a = y + 1; a < 4; a++) {
                            var elemB = $('[x=' + x + '][y=' + a + ']');
                            var valueB = parseInt($('[x=' + x + '][y=' + a + ']').attr("nbr"));
                            if (valueB === 0) {
                                continue;
                            } else if (valueB !== 0) {
                                moved = true;
                                moveTiles(elemA, elemB, valueB);
                                y--;
                                break;
                            }
                        }
                    } else if (valueA !== 0) {
                        for (a = y + 1; a < 4; a++) {
                            var elemB = $('[x=' + x + '][y=' + a + ']');
                            var valueB = parseInt($('[x=' + x + '][y=' + a + ']').attr("nbr"));
                            if (valueB === 0) {
                                continue;
                            } else if (valueB !== valueA) {
                                break;
                            } else if (valueB === valueA) {
                                moved = true;
                                mergeTiles(elemA, elemB, valueA);
                                break;
                            }
                        }
                    }
                }
            }
            if (moved === true) {
                generate_case(1);
                if (valueA === valueB){
                    $('.score')
                    console.count('score')
                }

            }
        }

        function move_right() {
            var moved = false;
            for (var y = 0; y < 4; y++) {
                for (var x = 3; x >= 0; x--) {
                    var elemA = $('[x=' + x + '][y=' + y + ']');
                    var valueA = parseInt($('[x=' + x + '][y=' + y + ']').attr("nbr"));
                    if (valueA === 0) {
                        for (a = x - 1; a >=0 ; a--) {
                            var elemB = $('[x=' + a + '][y=' + y + ']');
                            var valueB = parseInt($('[x=' + a + '][y=' + y + ']').attr("nbr"));
                            if (valueB === 0) {
                                continue;
                            } else if (valueB !== 0) {
                                moved = true;
                                moveTiles(elemA, elemB, valueB);
                                x++;
                                break;
                            }
                        }
                    } else if (valueA !== 0) {
                        for (a = x + 1; a < 4; a++) {
                            var elemB = $('[x=' + a + '][y=' + y + ']');
                            var valueB = parseInt($('[x=' + a + '][y=' + y + ']').attr("nbr"));
                            if (valueB === 0) {
                                continue;
                            } else if (valueB !== valueA) {
                                break;
                            } else if (valueB === valueA) {
                                moved = true;
                                mergeTiles(elemA, elemB, valueA);
                                break;
                            }
                        }
                    }
                }
            }
            if (moved === true) {
                generate_case(1);
                if (valueA === valueB){
                    $('.score-container')
                    console.count('score')
                }

            }
        }

        function move_down() {
            var moved = false;
            for (var x = 0; x < 4; x++) {
                for (var y = 3; y >=  0; y--) {
                    var elemA = $('[x=' + x + '][y=' + y + ']');
                    var valueA = parseInt($('[x=' + x + '][y=' + y + ']').attr("nbr"));
                    if (valueA === 0) {
                        for (a = y - 1; a >= 0; a--) {
                            var elemB = $('[x=' + x + '][y=' + a + ']');
                            var valueB = parseInt($('[x=' + x + '][y=' + a + ']').attr("nbr"));
                            if (valueB === 0) {
                                continue;
                            } else if (valueB !== 0) {
                                moved = true;
                                moveTiles(elemA, elemB, valueB);
                                y++;
                                break;
                            }
                        }
                    } else if (valueA !== 0) {
                        for (a = y - 1; a < 4; a--) {
                            var elemB = $('[x=' + x + '][y=' + a + ']');
                            var valueB = parseInt($('[x=' + x + '][y=' + a + ']').attr("nbr"));
                            if (valueB === 0) {
                                continue;
                            } else if (valueB !== valueA) {
                                break;
                            } else if (valueB === valueA) {
                                moved = true;
                                mergeTiles(elemA, elemB, valueA);
                                break;
                            }
                        }
                    }
                }
                if(moved === true){
                    generate_case(1);
                    if (valueA === valueB){
                        $('.score')
                        console.count('score')
                    }
                }
            }
            function gameOver(){
                if (moved === false){
                    window.alert("GAME OVER")
                }
            }
            gameOver();


        }



            // fonction de gestion des évenements (appuie de touches)
            $('html').keydown(function (event) {
                switch (event['key']) {
                    case 'ArrowLeft':
                        // insérer algo move left

                        move_left();

                        console.log("Left");
                        break;
                    case 'ArrowUp':
                        // insérer algo move up

                        move_up();

                        console.log("Up");
                        break;
                    case 'ArrowRight':
                        // insérer algo move right

                        move_right();

                        console.log("Right");
                        break;
                    case 'ArrowDown':
                        // insérer algo move down

                        move_down();

                        console.log("Down");
                        break;

                }
            });



            // début du code lancé
            $(this).append(generate_map()); // génération du tableau vide
            generate_case(2); // génération aléatoire de deux cases pleines (2 ou 4)
        }

})(jQuery); // fin du pluggin
var food = ['김밥','라면','돈가스','우동','모밀'];

document.write(food);

document.write('<p>'+food[1]+'</p>');

document.write('<p>'+food[3]+'</p>');

document.write('<p>'+food[0]+', '+food[1]+'</p>');

document.write('<p>'+food[2]+', '+food[4]+'</p>');

document.write('<p>~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>');

var i;
for (i = 0;i<=4;i++) {
  document.write('<p>'+food[i]+'</p>');
}
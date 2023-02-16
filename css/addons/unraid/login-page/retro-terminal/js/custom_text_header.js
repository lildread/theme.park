
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     
 __    __     ______     __  __     ______        ______     ______     ______     __   __   ______     ______    
/\ "-./  \   /\  __ \   /\ \_\ \   /\  ___\      /\  ___\   /\  ___\   /\  == \   /\ \ / /  /\  ___\   /\  == \   
\ \ \-./\ \  \ \  __ \  \ \____ \  \ \___  \     \ \___  \  \ \  __\   \ \  __<   \ \ \'/   \ \  __\   \ \  __<   
 \ \_\ \ \_\  \ \_\ \_\  \/\_____\  \/\_____\     \/\_____\  \ \_____\  \ \_\ \_\  \ \__|    \ \_____\  \ \_\ \_\ 
  \/_/  \/_/   \/_/\/_/   \/_____/   \/_____/      \/_____/   \/_____/   \/_/ /_/   \/_/      \/_____/   \/_/ /_/ 
                                                                                                            </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header

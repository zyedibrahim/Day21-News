var container = document.querySelector(".container")


async function sports(){

var surl = 'https://inshorts.deta.dev/news?category=sports'

var fetch_s = await fetch(surl)
var json_s = await fetch_s.json()






var create_wrap= document.createElement('div')
create_wrap.setAttribute('class','create-wrap')




for( var sdata =0; sdata<20; sdata++){
    console.log(json_s.data[sdata]);
    var cre_h_card = document.createElement('div')
    cre_h_card.setAttribute('class', 'mb-3')
    cre_h_card.classList.add('card')

cre_h_card.setAttribute('style','max-width:70rem;')
container.append(create_wrap)
create_wrap.append(cre_h_card)

var cre_h_row = document.createElement('div')
cre_h_row.setAttribute('class','row')
cre_h_row.classList.add('g-0')
cre_h_card.append(cre_h_row)


var create_col_md_4 = document.createElement('div')
create_col_md_4.setAttribute('class','col-lg-4')
create_col_md_4.classList.add('col-md-5')
cre_h_row.append(create_col_md_4)


var create_img = document.createElement('img')
create_img.setAttribute('src',json_s.data[sdata].imageUrl)
create_img.setAttribute('class','img-fluid')

create_img.setAttribute('alt','newsimage')
create_img.classList.add('rounded-start')
create_img.classList.add('card-img')
create_img.classList.add('h-100')
create_col_md_4.append(create_img)




var create_col_md_8 = document.createElement('div')
create_col_md_8.setAttribute('class','col-lg-8')
create_col_md_8.classList.add('col-md-7')
cre_h_card.append(create_col_md_8)
cre_h_row.append(create_col_md_8)



var create_card_body= document.createElement('div')
create_card_body.setAttribute('class','card-body')
create_col_md_8.append(create_card_body)


var create_h5 = document.createElement('h5')
create_h5.setAttribute('class','card-title')
create_h5.textContent= json_s.data[sdata].title
create_card_body.append(create_h5)


var create_p = document.createElement('p')
create_p.setAttribute('class','card-text')
create_card_body.append(create_p)

var create_p1 = document.createElement('p')
create_p.textContent = json_s.data[sdata].content
create_p1.setAttribute('class','card-text')

var create_small = document.createElement('small')
create_small.setAttribute('class','text-muted')
create_small.classList.add('float-end')
create_small.classList.add('mb-3')
create_small.textContent=json_s.data[sdata].date
create_p1.append(create_small)
create_card_body.append(create_p1)
}
}                        
sports()

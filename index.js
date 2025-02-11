let list = ["우유", "계란", "유부초밥", "한우++"];

const rendering = () => {
  const ul = document.querySelector("ul");

  ul.innerHTML = null;

  for (let i = 0; i < list.length; i++) {
    const button = document.createElement("button");

    button.innerText = "삭제";

    button.onclick = () => {
      list.splice(i, 1);

      rendering();
    };

    console.log(`${button}`);

    const p = document.createElement("p");
    p.innerText = list[i];

    const div = document.createElement("div");

    div.append(p, button);

    const li = document.createElement("li");

    li.append(div);

    ul.append(li);

    //   const tag = `
    //   <li>
    //     <div>
    //         <p>${list[i]}</p>
    //         ${button}
    //     </div>
    //   </li>
    //   `;

    //   li = `${li}${tag}`;
  }

  // ul.innerHTML = li;
};

rendering();

const form = document.querySelector("form");

const input = document.getElementById("item");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // form 태그 한정 새로고침 방지

  console.log(event);

  const item = input.value;
  if (item.length === 0) {
    alert("장 볼 물건 입력 ㄱㄱ");
    return input.focus();
  }

  console.log(item);
  list.unshift(item);

  rendering();

  input.value = "";
});

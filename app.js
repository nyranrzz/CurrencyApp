let body = document.querySelector("body");
let div1 = document.querySelector(".last1");
let div2 = document.querySelector(".last2");
let p1 = document.querySelectorAll(".m");
let p2 = document.querySelectorAll(".n");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let input1Box = document.getElementById("input1Box");
let input2Box = document.getElementById("input2Box");

let invalidChars = ["-", "+", "e"];
input1Box.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
input2Box.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

const url = "https://v6.exchangerate-api.com/v6/25cfa0835f8586d1f10b84ed";
let d = document.createElement("p");
let t = document.createElement("p");
let from = document.querySelector(".f").textContent;
let to = document.querySelector(".s").textContent;

fetch(`${url}/pair/${from}/${to}/${inp1.value}`)
  .then((res) => res.json())
  .then((data) => {
    const a = data.conversion_rate;
    let f = a.toFixed(4);

    d.innerText = `1RUB=${f}USD`;
    d.style.color = "gray";
    div1.append(d);
  })
  .catch((err) => err);

fetch(`${url}/pair/${to}/${from}/${inp2.value}`)
  .then((res) => res.json())
  .then((data) => {
    const a = data.conversion_rate;
    let f = a.toFixed(4);
    t.innerText = `1USD=${f}RUB`;
    t.style.color = "gray";
    div2.append(t);
  })
  .catch((err) => err);

inp1.addEventListener("keyup", () => {
  fetch(`${url}/pair/${from}/${to}/${inp1.value}`)
    .then((res) => res.json())
    .then((data) => {
      const a = data.conversion_rate;
      let f = a.toFixed(4);
      const l = inp1.value * a;
      inp2.value = l.toFixed(4);
      d.remove();
      let d = document.createElement("p");
      d.innerText = `1RUB=${f}USD`;
      d.style.color = "gray";
      div1.append(d);
    })
    .catch((err) => err);
});

inp2.addEventListener("keyup", () => {
  fetch(`${url}/pair/${to}/${from}/${inp2.value}`)
    .then((res) => res.json())
    .then((data) => {
      const a = data.conversion_rate;
      let f = a.toFixed(4);
      const l = inp2.value * a;
      inp1.value = l.toFixed(4);
      if (t == true) {
        t.remove();
      }
      let t = document.createElement("p");
      t.innerText = `1USD=${f}RUB`;
      t.style.color = "gray";
      div2.append(t);
    })
    .catch((err) => err);
});

let p11 = document.createElement("p");
let p22 = document.createElement("p");
p1.forEach((a) => {
  a.addEventListener("click", () => {
    p1.forEach((p1) => {
      if (p1.classList.contains("active")) {
        p1.classList.remove("active");
      }
    });
    a.classList.add("active");
    from = document.querySelector(".active").textContent;
    p11.style.color = "gray";
    p22.style.color = "gray";
    d.remove();
    t.remove();
    p11.innerText = " ";
    p22.innerText = " ";
    fetch(`${url}/pair/${from}/${to}/${inp1.value}`)
      .then((res) => res.json())
      .then((data) => {
        const a2 = data.conversion_rate;
        const b2 = inp1.value * a2;
        inp2.value = b2.toFixed(4);
        p11.innerText = `1${from}=${a2}${to}`;
        div1.append(p11);
      })
      .catch((err) => console.error(err));
    fetch(`${url}/pair/${to}/${from}/${inp2.value}`)
      .then((res) => res.json())
      .then((data) => {
        const a2 = data.conversion_rate;
        p22.innerText = `1${to}=${a2}${from}`;
        div2.append(p22);
      })
      .catch((err) => console.error(err));

    p2.forEach((b) => {
      b.addEventListener("click", () => {
        if (b.classList.contains("actived")) {
          b.classList.remove("actived");
        }
        b.classList.add("actived");
        to = document.querySelector(".actived").textContent;
        p11.style.color = "gray";
        p22.style.color = "gray";
        d.remove();
        t.remove();
        p11.innerText = " ";
        p22.innerText = " ";
        fetch(`${url}/pair/${from}/${to}/${inp1.value}`)
          .then((res) => res.json())
          .then((data) => {
            const a2 = data.conversion_rate;
            const b2 = inp1.value * a2;
            inp2.value = b2.toFixed(4);
            p11.innerText = `1${from}=${a2}${to}`;
            div1.append(p11);
          })
          .catch((err) => console.error(err));
        fetch(`${url}/pair/${to}/${from}/${inp2.value}`)
          .then((res) => res.json())
          .then((data) => {
            const a2 = data.conversion_rate;
            p22.innerText = `1${to}=${a2}${from}`;
            div2.append(p22);
          })
          .catch((err) => console.error(err));
      });
    });
  });
});
p2.forEach((b) => {
  b.addEventListener("click", () => {
    p2.forEach((p2) => {
      if (p2.classList.contains("actived")) {
        p2.classList.remove("actived");
      }
    });
    b.classList.add("actived");
    to = document.querySelector(".actived").textContent;
    p11.style.color = "gray";
    p22.style.color = "gray";
    d.remove();
    t.remove();
    p11.innerText = " ";
    p22.innerText = " ";
    fetch(`${url}/pair/${to}/${from}/${inp2.value}`)
      .then((res) => res.json())
      .then((data) => {
        const a2 = data.conversion_rate;
        const b2 = inp2.value * a2;
        inp1.value = b2.toFixed(4);
        p22.innerText = `1${to}=${a2}${from}`;
        div2.append(p22);
      })
      .catch((err) => console.error(err));
    fetch(`${url}/pair/${from}/${to}/${inp1.value}`)
      .then((res) => res.json())
      .then((data) => {
        const a2 = data.conversion_rate;
        p11.innerText = `1${from}=${a2}${to}`;
        div1.append(p11);
      })
      .catch((err) => console.error(err));

    p1.forEach((a) => {
      a.addEventListener("click", () => {
        if (a.classList.contains("active")) {
          a.classList.remove("active");
        }
        a.classList.add("active");
        from = document.querySelector(".active").textContent;
        p11.style.color = "gray";
        p22.style.color = "gray";
        d.remove();
        t.remove();
        p11.innerText = " ";
        p22.innerText = " ";
        fetch(`${url}/pair/${to}/${from}/${inp2.value}`)
          .then((res) => res.json())
          .then((data) => {
            const a2 = data.conversion_rate;
            const b2 = inp2.value * a2;
            inp1.value = b2.toFixed(4);
            p22.innerText = `1${to}=${a2}${from}`;
            div2.append(p22);
          })
          .catch((err) => console.error(err));
        fetch(`${url}/pair/${from}/${to}/${inp1.value}`)
          .then((res) => res.json())
          .then((data) => {
            const a2 = data.conversion_rate;
            p11.innerText = `1${from}=${a2}${to}`;
            div1.append(p11);
          })
          .catch((err) => console.error(err));
      });
    });
  });
});

var logInForm = document.querySelector(".log-in-form");
logInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(logInForm);
    const userName = formData.get("userName");
    const password = formData.get("password");
    const body = { userName, password };

    try {
        const res = await fetch("/users/token", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            throw res;
        }
        const {
            token,
            user: { id },
        } = await res.json();

        localStorage.setItem("SOUNDCLOUD_ACCESS_TOKEN", token);
        localStorage.setItem("SOUNDCLOUD_USER_ID", id);
        window.location.href = `/homepage/${userName}`;
    } catch (err) {
        if (err.status >= 400 && err.status < 600) {
            const errorJSON = await err.json();
            // console.log(errorJSON);
            const errorsContainer = document.querySelector(".errors-container");
            let errorsHtml = [
                `
                <div>
                    Something went wrong. Please try again.
                </div>
                `,
            ];
            const { errors } = errorJSON;
            if (errors && Array.isArray(errors)) {
                errorsHtml = errors.map(
                    (message) => `
                    <div>
                        ${message}
                    </div>
                    `
                );
            } else {
                const invalidCred = document.createElement("li");
                const mainHeader = document.querySelector(".mainHeader");
                const errDiv = document.querySelector(".errDiv");
                // console.log(mainHeader.length);
                invalidCred.innerHTML = `${errorJSON.errors}`;
                invalidCred.setAttribute("style", "font-size: 20px");
                errDiv.innerHTML = "";
                errDiv.appendChild(invalidCred);
            }
            errorsContainer.innerHTML = errorsHtml.join("");
        }
    }
});

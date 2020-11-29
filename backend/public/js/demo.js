const demoButton = document.querySelector(".demoButton");
demoButton.addEventListener("click", async (e) => {
    const loginDemo = async () => {
        try {
            const res = await fetch("/users/token", {
                method: "POST",
                body: JSON.stringify({ userName: "Demo", password: "test" }),
                headers: {
                    "Content-Type": "application/json"
                }
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
            window.location.href = `/homepage/Demo`;

        } catch {
            // console.log(err);
        }
    }
    // loginDemo();

});
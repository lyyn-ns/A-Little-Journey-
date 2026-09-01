// =====================================================
// SCORE
// =====================================================

const scores = {
    sad: 0,
    happy: 0,
    lost: 0,
    upset: 0,
    love: 0
};

let currentRoom = 1;
let lastEmotion = null;
let finalEmotion = null;



// =====================================================
// SCENES
// =====================================================

const intro =
    document.getElementById("intro");

const room1 =
    document.getElementById("room1");

const room2 =
    document.getElementById("room2");

const room3 =
    document.getElementById("room3");

const room4 =
    document.getElementById("room4");

const room5 =
    document.getElementById("room5");

const resultScene =
    document.getElementById("resultScene");


function changeScene(fromScene, toScene) {

    fromScene.classList.remove("active");

    setTimeout(() => {

        toScene.classList.add("active");

    }, 450);

}



// =====================================================
// INTRO
// =====================================================

const beginDoor =
    document.getElementById("beginDoor");


beginDoor.addEventListener(
    "click",
    () => {

        changeScene(
            intro,
            room1
        );

    }
);



// =====================================================
// ROOM 01
// =====================================================

const room1Trigger =
    document.getElementById("room1Trigger");

const question1 =
    document.getElementById("question1");

const bookHint =
    document.getElementById("bookHint");


room1Trigger.addEventListener(
    "click",
    () => {

        if (
            room1Trigger.classList.contains(
                "book-open"
            )
        ) {
            return;
        }


        bookHint.classList.add("hidden");

        room1Trigger.classList.add(
            "book-open"
        );


        setTimeout(() => {

            question1.classList.add(
                "question-visible"
            );

        }, 800);

    }
);



// =====================================================
// ROOM 02
// =====================================================

const room2Trigger =
    document.getElementById(
        "room2Trigger"
    );

const room2TriggerRight =
    document.getElementById(
        "room2TriggerRight"
    );

const question2 =
    document.getElementById("question2");

const archWindow =
    document.querySelector(
        ".arch-window-wrap"
    );

const windowHint =
    document.getElementById(
        "windowHint"
    );


function openRoom2Window() {

    if (
        archWindow.classList.contains(
            "opened"
        )
    ) {
        return;
    }


    windowHint.classList.add(
        "hidden"
    );

    archWindow.classList.add(
        "opened"
    );


    setTimeout(() => {

        question2.classList.add(
            "question-visible"
        );

    }, 900);

}


room2Trigger.addEventListener(
    "click",
    openRoom2Window
);


room2TriggerRight.addEventListener(
    "click",
    openRoom2Window
);



// =====================================================
// ROOM 03
// =====================================================

const room3Trigger =
    document.getElementById(
        "room3Trigger"
    );

const question3 =
    document.getElementById(
        "question3"
    );

const releasedPetals =
    document.getElementById(
        "releasedPetals"
    );

const flowerHint =
    document.getElementById(
        "flowerHint"
    );


room3Trigger.addEventListener(
    "click",
    () => {

        if (
            room3Trigger.classList.contains(
                "triggered"
            )
        ) {
            return;
        }


        flowerHint.classList.add(
            "hidden"
        );

        room3Trigger.classList.add(
            "triggered"
        );

        releasedPetals.classList.add(
            "active"
        );


        setTimeout(() => {

            question3.classList.add(
                "question-visible"
            );

        }, 550);

    }
);



// =====================================================
// ROOM 04
// =====================================================

const room4Trigger =
    document.getElementById(
        "room4Trigger"
    );

const question4 =
    document.getElementById(
        "question4"
    );

const cupHint =
    document.getElementById(
        "cupHint"
    );


room4Trigger.addEventListener(
    "click",
    () => {

        cupHint.classList.add(
            "hidden"
        );

        room4Trigger.classList.add(
            "triggered"
        );


        setTimeout(() => {

            question4.classList.add(
                "question-visible"
            );

        }, 500);

    }
);



// =====================================================
// ROOM 05
// =====================================================

const room5Trigger =
    document.getElementById(
        "room5Trigger"
    );

const question5 =
    document.getElementById(
        "question5"
    );

const finalDoorWrap =
    document.querySelector(
        ".final-door-wrap"
    );

const finalDoorHint =
    document.getElementById(
        "finalDoorHint"
    );


room5Trigger.addEventListener(
    "click",
    () => {

        finalDoorHint.classList.add(
            "hidden"
        );

        finalDoorWrap.classList.add(
            "triggered"
        );


        setTimeout(() => {

            question5.classList.add(
                "question-visible"
            );

        }, 700);

    }
);



// =====================================================
// ANSWERS
// =====================================================

const answerButtons =
    document.querySelectorAll(
        ".answers button"
    );


answerButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const emotion =
                button.dataset.emotion;


            scores[emotion] += 2;

            lastEmotion = emotion;


            if (currentRoom === 1) {

                currentRoom = 2;

                changeScene(
                    room1,
                    room2
                );

            }

            else if (currentRoom === 2) {

                currentRoom = 3;

                changeScene(
                    room2,
                    room3
                );

            }

            else if (currentRoom === 3) {

                currentRoom = 4;

                changeScene(
                    room3,
                    room4
                );

            }

            else if (currentRoom === 4) {

                currentRoom = 5;

                changeScene(
                    room4,
                    room5
                );

            }

            else if (currentRoom === 5) {

                showResult();

            }

        }
    );

});



// =====================================================
// RESULT DATA
// =====================================================

const resultData = {

    sad: {

        title:
            "A Quiet Sadness",

        lead:
            "Your heart might be carrying something quietly.",

        reference:
            "SURAH ALI 'IMRAN · 3:139",

        verse:
            "So do not weaken and do not grieve, and you will be superior if you are believers.",

        english:
            "You don't have to pretend that you're okay every day. Some days are simply meant to be softer.",

        korean:
            "매일 괜찮은 척하지 않아도 괜찮아요. 어떤 날은 그저 조금 더 천천히 지나가도 되니까요."

    },


    happy: {

        title:
            "A Little Light",

        lead:
            "There seems to be a little light in you right now.",

        reference:
            "SURAH IBRAHIM · 14:7",

        verse:
            "If you are grateful, I will certainly give you more.",

        english:
            "Hold onto the little things that make you smile. They matter more than you think.",

        korean:
            "당신을 웃게 하는 작은 것들을 소중히 간직하세요. 생각보다 그 순간들은 더 소중하니까요."

    },


    lost: {

        title:
            "Finding Your Way",

        lead:
            "Maybe you don't need to know where you're going just yet.",

        reference:
            "SURAH AD-DUHA · 93:7",

        verse:
            "And He found you lost and guided you.",

        english:
            "It's okay if the path isn't clear. You can take one small step at a time.",

        korean:
            "길이 아직 보이지 않아도 괜찮아요. 한 번에 한 걸음씩 천천히 나아가면 돼요."

    },


    upset: {

        title:
            "A Heavy Heart",

        lead:
            "You've been holding a lot inside.",

        reference:
            "SURAH ASH-SHARH · 94:5–6",

        verse:
            "For indeed, with hardship comes ease. Indeed, with hardship comes ease.",

        english:
            "Put some of it down for a while. You don't have to solve everything tonight.",

        korean:
            "잠시 내려놓아도 괜찮아요. 오늘 밤 모든 것을 해결하지 않아도 돼요."

    },


    love: {

        title:
            "A Heart Drawn Close",

        lead:
            "There seems to be someone who makes your ordinary days feel a little different.",

        reference:
            "SURAH AR-RUM · 30:21",

        verse:
            "And He placed between you affection and mercy.",

        english:
            "Whatever your heart is feeling, let it lead you toward something kind, sincere, and good.",

        korean:
            "당신의 마음이 향하는 곳이 다정하고 진실하며 좋은 곳이기를 바라요."

    }

};



// =====================================================
// RESULT ELEMENTS
// =====================================================

const resultTitle =
    document.getElementById(
        "resultTitle"
    );

const resultLead =
    document.getElementById(
        "resultLead"
    );

const verseReference =
    document.getElementById(
        "verseReference"
    );

const verseText =
    document.getElementById(
        "verseText"
    );

const encouragementEnglish =
    document.getElementById(
        "encouragementEnglish"
    );

const encouragementKorean =
    document.getElementById(
        "encouragementKorean"
    );

const mixedNote =
    document.getElementById(
        "mixedNote"
    );

const shareNote =
    document.getElementById(
        "shareNote"
    );



// =====================================================
// RESULT
// =====================================================

function showResult() {

    const sorted =
        Object.entries(scores)
            .sort(
                (a, b) =>
                    b[1] - a[1]
            );


    let winner =
        sorted[0][0];


    const highestScore =
        sorted[0][1];


    const tied =
        sorted
            .filter(
                item =>
                    item[1] ===
                    highestScore
            )
            .map(
                item => item[0]
            );


    if (
        tied.length > 1 &&
        tied.includes(lastEmotion)
    ) {

        winner =
            lastEmotion;

    }


    finalEmotion = winner;


    const data =
        resultData[winner];


    resultTitle.textContent =
        data.title;

    resultLead.textContent =
        data.lead;

    verseReference.textContent =
        data.reference;

    verseText.textContent =
        data.verse;

    encouragementEnglish.textContent =
        data.english;

    encouragementKorean.textContent =
        data.korean;


    const secondHighest =
        sorted.find(
            item =>
                item[0] !== winner
        );


    if (
        secondHighest &&
        highestScore -
        secondHighest[1] <= 2
    ) {

        mixedNote.textContent =
            "There may be more than one feeling sitting quietly beside this one.";

    }

    else {

        mixedNote.textContent = "";

    }


    shareNote.textContent = "";


    changeScene(
        room5,
        resultScene
    );

}



// =====================================================
// CANVAS TEXT WRAPPING
// =====================================================

function wrapCanvasText(
    context,
    text,
    x,
    y,
    maxWidth,
    lineHeight
) {

    const isKorean =
        /[\u3131-\uD79D]/.test(text);


    const units =
        isKorean
            ? Array.from(text)
            : text.split(" ");


    let line = "";
    let currentY = y;


    for (
        let i = 0;
        i < units.length;
        i++
    ) {

        const separator =
            isKorean
                ? ""
                : " ";


        const testLine =
            line +
            units[i] +
            separator;


        const width =
            context.measureText(
                testLine
            ).width;


        if (
            width > maxWidth &&
            line.length > 0
        ) {

            context.fillText(
                line.trim(),
                x,
                currentY
            );


            line =
                units[i] +
                separator;


            currentY +=
                lineHeight;

        }

        else {

            line =
                testLine;

        }

    }


    context.fillText(
        line.trim(),
        x,
        currentY
    );


    return currentY;

}



// =====================================================
// CANVAS
// =====================================================

const cardCanvas =
    document.getElementById(
        "cardCanvas"
    );



// =====================================================
// CREATE RESULT IMAGE
// =====================================================

function makeCardBlob() {

    return new Promise(resolve => {

        const canvas =
            cardCanvas;

        const ctx =
            canvas.getContext("2d");


        const data =
            resultData[
                finalEmotion
            ];


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        // background

        const gradient =
            ctx.createLinearGradient(
                0,
                0,
                canvas.width,
                canvas.height
            );


        gradient.addColorStop(
            0,
            "#f8ede3"
        );

        gradient.addColorStop(
            0.55,
            "#ead5d6"
        );

        gradient.addColorStop(
            1,
            "#cbbfd0"
        );


        ctx.fillStyle =
            gradient;


        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        // decorative circles

        ctx.fillStyle =
            "rgba(120,112,145,0.13)";

        ctx.beginPath();

        ctx.arc(
            70,
            1400,
            340,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.fillStyle =
            "rgba(255,242,217,0.30)";

        ctx.beginPath();

        ctx.arc(
            1040,
            90,
            280,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // moon

        ctx.fillStyle =
            "#f4e5bf";

        ctx.beginPath();

        ctx.arc(
            900,
            130,
            54,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // stars

        ctx.textAlign =
            "center";


        ctx.fillStyle =
            "rgba(95,82,119,0.58)";


        ctx.font =
            "34px Georgia";


        ctx.fillText(
            "✦",
            145,
            145
        );


        ctx.fillText(
            "✧",
            770,
            210
        );


        // heading

        ctx.fillStyle =
            "#756875";


        ctx.font =
            "24px Georgia";


        ctx.fillText(
            "YOUR HEART SEEMS TO BE CARRYING",
            540,
            225
        );


        // title

        ctx.fillStyle =
            "#5e5059";


        ctx.font =
            "76px Georgia";


        const titleEnd =
            wrapCanvasText(
                ctx,
                data.title,
                540,
                360,
                800,
                85
            );


        // lead

        ctx.fillStyle =
            "#6b5c62";


        ctx.font =
            "31px Georgia";


        const leadEnd =
            wrapCanvasText(
                ctx,
                data.lead,
                540,
                titleEnd + 90,
                790,
                46
            );


        // divider

        ctx.fillStyle =
            "#8e7984";


        ctx.font =
            "28px Georgia";


        ctx.fillText(
            "✦",
            540,
            leadEnd + 70
        );


        // reference

        ctx.fillStyle =
            "#7a6c72";


        ctx.font =
            "23px Georgia";


        ctx.fillText(
            data.reference,
            540,
            leadEnd + 150
        );


        // verse

        ctx.fillStyle =
            "#62545a";


        ctx.font =
            "italic 38px Georgia";


        const verseEnd =
            wrapCanvasText(
                ctx,
                `“${data.verse}”`,
                540,
                leadEnd + 230,
                800,
                58
            );


        // English motivation

        ctx.fillStyle =
            "#64565c";


        ctx.font =
            "31px Georgia";


        const englishEnd =
            wrapCanvasText(
                ctx,
                data.english,
                540,
                verseEnd + 125,
                790,
                48
            );


        // heart divider

        ctx.fillStyle =
            "rgba(118,101,111,0.58)";


        ctx.font =
            "24px Georgia";


        ctx.fillText(
            "♡",
            540,
            englishEnd + 70
        );


        // Korean motivation

        ctx.fillStyle =
            "#665a60";


        ctx.font =
            '30px Arial, "Malgun Gothic", sans-serif';


        const koreanEnd =
            wrapCanvasText(
                ctx,
                data.korean,
                540,
                englishEnd + 125,
                790,
                46
            );


        // mixed note if any

        if (
            mixedNote.textContent.trim() !== ""
        ) {

            ctx.fillStyle =
                "rgba(92,78,84,0.70)";


            ctx.font =
                "italic 23px Georgia";


            wrapCanvasText(
                ctx,
                mixedNote.textContent,
                540,
                koreanEnd + 100,
                780,
                38
            );

        }


        // watermark

        ctx.fillStyle =
            "rgba(83,70,81,0.58)";


        ctx.font =
            "24px Georgia";


        ctx.fillText(
            "lyyn.ns ♡",
            540,
            1420
        );


        canvas.toBlob(
            blob => resolve(blob),
            "image/png",
            1
        );

    });

}



// =====================================================
// DOWNLOAD RESULT
// =====================================================

const downloadCard =
    document.getElementById(
        "downloadCard"
    );


downloadCard.addEventListener(
    "click",
    async () => {

        const blob =
            await makeCardBlob();


        const url =
            URL.createObjectURL(
                blob
            );


        const link =
            document.createElement(
                "a"
            );


        link.href = url;


        link.download =
            "a-little-journey-result.png";


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        URL.revokeObjectURL(
            url
        );


        shareNote.textContent =
            "Your card has been saved ♡";

    }
);



// =====================================================
// SHARE RESULT
// =====================================================

const shareCard =
    document.getElementById(
        "shareCard"
    );


shareCard.addEventListener(
    "click",
    async () => {

        const blob =
            await makeCardBlob();


        const file =
            new File(
                [blob],
                "a-little-journey-result.png",
                {
                    type: "image/png"
                }
            );


        /*
        When the site is hosted,
        window.location.href becomes
        the real website link.
        */


        const pageLink =
            window.location.protocol === "file:"
                ? ""
                : window.location.href;


        let shareText =
            "A little card from my journey ♡";


        if (pageLink) {

            shareText +=
                "\n" +
                pageLink;

        }


        if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({
                files: [file]
            })
        ) {

            try {

                await navigator.share({

                    title:
                        "A Little Journey",

                    text:
                        shareText,

                    files:
                        [file]

                });


                shareNote.textContent =
                    "Shared ♡";

            }

            catch (error) {

                shareNote.textContent =
                    "Sharing was cancelled.";

            }

        }

        else {

            /*
            Desktop browsers often do not
            support file sharing.

            Save the image instead.
            */

            shareNote.textContent =
                "This browser can't share the picture directly yet. Save the card and share it from your phone ♡";

        }

    }
);



// =====================================================
// RESTART
// =====================================================

const restartButton =
    document.getElementById(
        "restartButton"
    );


restartButton.addEventListener(
    "click",
    () => {

        Object.keys(scores)
            .forEach(key => {

                scores[key] = 0;

            });


        currentRoom = 1;

        lastEmotion = null;

        finalEmotion = null;


        // Room 01

        room1Trigger.classList.remove(
            "book-open"
        );

        bookHint.classList.remove(
            "hidden"
        );


        // Room 02

        archWindow.classList.remove(
            "opened"
        );

        windowHint.classList.remove(
            "hidden"
        );


        // Room 03

        room3Trigger.classList.remove(
            "triggered"
        );

        releasedPetals.classList.remove(
            "active"
        );

        flowerHint.classList.remove(
            "hidden"
        );


        // Room 04

        room4Trigger.classList.remove(
            "triggered"
        );

        cupHint.classList.remove(
            "hidden"
        );


        // Room 05

        finalDoorWrap.classList.remove(
            "triggered"
        );

        finalDoorHint.classList.remove(
            "hidden"
        );


        // hide all questions

        document
            .querySelectorAll(
                ".question-card"
            )
            .forEach(card => {

                card.classList.remove(
                    "question-visible"
                );

            });


        shareNote.textContent = "";


        changeScene(
            resultScene,
            intro
        );

    }
);
export class WarningTemplate
{
    constructor(){}

    getMainScreenTemplate(){
        return `
            <div class="flex flex-col gap-2 h-full overflow-x-scroll" id="warningBoard">
            </div>
            
            <div class="w-full flex justify-center bg-[#212529]">
                <textarea name="" minlength="20" maxlength="250" id="txtWarningInput"
                    class="w-full p-2 text-sm min-h-[40px] bg-[#212529] text-[#FFFFFF] max-h-[150px]"></textarea>
            
                <button id="btnWarningMessage" class="bg-[#343A40] p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="16" height="16"
                        fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path
                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                </button>
            </div>
        `
    }

    getWarningMessage(warning){
        return `
            <div class="p-4 flex flex-col justify-between gap-4 bg-white border-b-[1px] border-[#9ea7af] warningContainer" data-warningId="${warning.id}">
                <h2 class="text-md font-semibold" id="reviewerName">
                    ${warning.reviewer}
                </h2>
                <div class="flex justify-between">
                    <p class="text-sm text-[#6C757D]" id="message">
                        ${warning.message}
                    </p>
                    <button id="btnDelete">
                        <svg width="18" height="18" viewBox="0 0 84 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="57" height="4" fill="#AE5858"/>
                            <rect x="27" y="82" width="57" height="4" fill="#AE5858"/>
                            <rect x="84" y="15" width="67" height="4" transform="rotate(90 84 15)" fill="#AE5858"/>
                            <rect x="4" y="4" width="67" height="4" transform="rotate(90 4 4)" fill="#AE5858"/>
                            <rect x="34" y="20" width="15" height="3" fill="#AE5858"/>
                            <rect x="28" y="63" width="28" height="3" fill="#AE5858"/>
                            <rect x="28" y="31" width="28" height="3" fill="#AE5858"/>
                            <rect x="20" y="25" width="43" height="3" fill="#AE5858"/>
                            <rect x="28" y="31" width="35" height="3" transform="rotate(90 28 31)" fill="#AE5858"/>
                            <rect x="59" y="31" width="35" height="3" transform="rotate(90 59 31)" fill="#AE5858"/>
                            <rect x="36" y="38" width="21" height="2" transform="rotate(90 36 38)" fill="#AE5858"/>
                            <rect x="43" y="38" width="21" height="2" transform="rotate(90 43 38)" fill="#AE5858"/>
                            <rect x="50" y="38" width="21" height="2" transform="rotate(90 50 38)" fill="#AE5858"/>
                        </svg>
                    </button>
                </div>               
                <div class="flex flex-row gap-2 h-[25px] justify-start">
                    <p class="font-semibold text-[#6C757D]" id="strikeCounter">
                        ${warning.strikes}
                    </p>
                    <a class="h-full w-[16px] flex flex-row justify-center align-middle cursor-pointer" id="addStrike">
                        <svg  viewBox="0 0 10 10" fill="none" class="flex flex-col justify-center align-middle" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7_44)">
                                <path
                                    d="M1.61238 8.92181C1.5685 9.18819 1.81487 9.39638 2.03199 9.27759L4.50132 7.92409L6.97009 9.27759C7.18721 9.39638 7.43358 9.18819 7.38971 8.92241L6.92284 6.08463L8.90393 4.07118C9.08955 3.8828 8.99393 3.53842 8.74531 3.50123L5.99023 3.08366L4.76176 0.487656C4.73835 0.435033 4.70143 0.390573 4.65528 0.359441C4.60913 0.328309 4.55565 0.311783 4.50104 0.311783C4.44644 0.311783 4.39295 0.328309 4.3468 0.359441C4.30065 0.390573 4.26373 0.435033 4.24033 0.487656L3.01185 3.08426L0.256775 3.50183C0.00871751 3.53902 -0.0874682 3.8834 0.0975909 4.07178L2.07924 6.08523L1.61238 8.92301V8.92181ZM4.37139 7.26174L2.29805 8.39805L2.68842 6.02403C2.69756 5.96939 2.69399 5.91318 2.678 5.86035C2.66201 5.80752 2.63411 5.75969 2.59673 5.72106L0.962138 4.05918L3.24135 3.71361C3.28854 3.70601 3.33331 3.68632 3.37181 3.65623C3.41031 3.62613 3.44139 3.58653 3.4624 3.54082L4.5002 1.34619L5.53912 3.54082C5.56013 3.58653 5.59122 3.62613 5.62972 3.65623C5.66821 3.68632 5.71298 3.70601 5.76018 3.71361L8.03938 4.05858L6.40479 5.72046C6.36733 5.75915 6.33937 5.80708 6.32338 5.86003C6.30739 5.91297 6.30386 5.96929 6.3131 6.02403L6.70347 8.39805L4.63013 7.26174C4.59004 7.23969 4.54559 7.22819 4.50048 7.22819C4.45537 7.22819 4.41148 7.23969 4.37139 7.26174Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_7_44">
                                    <rect width="10" height="10" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
            
                </div>
            </div>
        `
    }

    getNoMessageScreen(){
        return `
        <div class="h-full w-full flex flex-col justify-center text-center">
            <h2>
                No Content
            </h2>
        </div>
        `
    }

}
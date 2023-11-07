export class SharedTemplate
{
    constructor(){}

    getMessageTemplate(){
        return `
        <div class="p-4 flex flex-col justify-between gap-4 bg-white border-b-[1px] border-[#9ea7af]" id="$$$ID$$$">
            <h2 class="text-md font-semibold" id="reviewerName">
                $$$reviewer$$$
            </h2>
            <p class="text-sm text-[#6C757D]" id="message">
                $$$message$$$
            </p>
            <div class="flex flex-row gap-2 h-[25px] justify-start">
                <p class="font-semibold text-[#6C757D]" id="strikeCounter">
                    $$$strikecount$$$
                </p>
                <a class="h-full w-[16px] flex flex-row justify-center align-middle cursor-pointer" id="updateStrike">
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

    getScreenTemplate(){
        return `
        <div class="flex flex-col gap-2 h-full overflow-x-scroll" id="threadBoard">
        </div>
        
        <div class="w-full flex justify-center bg-[#212529]">
            <textarea name="" minlength="20" maxlength="250" id="txtThreadMessage"
                class="w-full p-2 text-sm min-h-[40px] bg-[#212529] text-[#FFFFFF] max-h-[150px]"></textarea>
        
            <button id="btnThreadMessage" class="bg-[#343A40] p-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="16" height="16"
                    fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path
                        d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
            </button>
        </div>
        `
    }

    getLoadingAnimiation(){
        return `
        <section class="h-full flex flex-col justify-center mx-auto ">
            <svg width="84" height="86" viewBox="0 0 84 86" class="animate-ping" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="3.65217" height="71.2174" fill="#D9D9D9" fill-opacity="0.5"/>
                <rect x="29.2174" width="3.65217" height="25.5652" transform="rotate(90 29.2174 0)" fill="#D9D9D9" fill-opacity="0.5"/>
                <rect x="56.6087" y="29.2174" width="3.65217" height="27.3913" transform="rotate(90 56.6087 29.2174)" fill="#D9D9D9" fill-opacity="0.5"/>
                <rect x="29.2174" y="32.8696" width="3.65218" height="29.2174" transform="rotate(-180 29.2174 32.8696)" fill="#D9D9D9" fill-opacity="0.5"/>
                <rect x="56.6087" y="29.2174" width="3.65218" height="29.2174" transform="rotate(-180 56.6087 29.2174)" fill="#D9D9D9" fill-opacity="0.5"/>
                <rect x="84" y="85.8261" width="3.65217" height="71.2174" transform="rotate(-180 84 85.8261)" fill="#D9D9D9" fill-opacity="0.5"/>
                <rect x="54.7826" y="85.8261" width="3.65217" height="25.5652" transform="rotate(-90 54.7826 85.8261)" fill="#D9D9D9" fill-opacity="0.5"/>
                <rect x="27.3913" y="56.6087" width="3.65217" height="27.3913" transform="rotate(-90 27.3913 56.6087)" fill="#D9D9D9" fill-opacity="0.5"/>
                <rect x="54.7826" y="52.9565" width="3.65218" height="29.2174" fill="#D9D9D9" fill-opacity="0.5"/>
                <rect x="27.3913" y="56.6087" width="3.65218" height="29.2174" fill="#D9D9D9" fill-opacity="0.5"/>
                </svg>                   
        </section>
        `
    }

    getNoContentScreen(){
        return `
        <section class="h-full flex flex-col justify-center mx-auto ">
            <svg width="84" height="86" viewBox="0 0 84 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="71" width="4" height="71" transform="rotate(-180 4 71)" fill="#E9ECEF"/>
                <rect x="57" width="4" height="53" transform="rotate(90 57 0)" fill="#E9ECEF"/>
                <path d="M50.9654 58.6716C51.4776 58.8341 52 58.4519 52 57.9145C52 57.5684 51.7759 57.2622 51.4461 57.1575L42.1052 54.1921C41.7114 54.0671 41.2886 54.0671 40.8948 54.1921L31.5539 57.1575C31.2241 57.2622 31 57.5684 31 57.9145C31 58.4519 31.5224 58.8341 32.0346 58.6716L40.8948 55.8588C41.2886 55.7338 41.7114 55.7338 42.1052 55.8588L50.9654 58.6716Z" fill="#E9ECEF"/>
                <path d="M34.9654 29.6716C35.4776 29.8341 36 29.4519 36 28.9145C36 28.5684 35.7759 28.2622 35.4461 28.1575L26.1052 25.1921C25.7114 25.0671 25.2886 25.0671 24.8948 25.1921L15.5539 28.1575C15.2241 28.2622 15 28.5684 15 28.9145C15 29.4519 15.5224 29.8341 16.0346 29.6716L24.8948 26.8588C25.2886 26.7338 25.7114 26.7338 26.1052 26.8588L34.9654 29.6716Z" fill="#E9ECEF"/>
                <path d="M67.9654 29.6716C68.4776 29.8341 69 29.4519 69 28.9145C69 28.5684 68.7759 28.2622 68.4461 28.1575L59.1052 25.1921C58.7114 25.0671 58.2886 25.0671 57.8948 25.1921L48.5539 28.1575C48.2241 28.2622 48 28.5684 48 28.9145C48 29.4519 48.5224 29.8341 49.0346 29.6716L57.8948 26.8588C58.2886 26.7338 58.7114 26.7338 59.1052 26.8588L67.9654 29.6716Z" fill="#E9ECEF"/>
                <rect x="80" y="82" width="4" height="53" transform="rotate(90 80 82)" fill="#E9ECEF"/>
                <rect x="84" y="86" width="4" height="71" transform="rotate(-180 84 86)" fill="#E9ECEF"/>
            </svg>
            
            <p class="text-[#ADB5BD]">No Content</p>
        </section>

        `
    }

}
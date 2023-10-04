export class ThreadTemplates
{
    constructor(){}

    message(reviewer, message, threadId){
        return`
        <div class="bg-gray-200 rounded-md px-5 shadow-md" id="${threadId}">
                <h2 class="py-3 px-2">
                    ${reviewer}
                </h2>
                <p class="px-2 text-sm">
                    ${message}                    
                </p>
                <div class="flex justify-end">
                    <a href="" class="my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </a>
                </div>
            </div>
        `
    }

    mainScreen(){
        return `
            <div class="p-5 flex flex-col gap-2 h-[80vh] overflow-x-scroll" id="threadBoard">
            </div>

            <div class="w-full h-[10vh] flex justify-center">
                <textarea name="" id="txtThreadMessage" class="w-full h-full p-2 text-sm "></textarea>

                <button id="btnThreadMessage" class="bg-gray-500 p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="16" height="16"
                        fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path
                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                </button>
            </div>
        `
    }
}
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
}
export const wons = (data) => {
    const newArray = [...new Set(data)];
    switch (newArray.length) {
        case 1:
            return 10;
        case 2:
            return 1;
        case 3:
            return 0;

        default:
            break;
    }


}
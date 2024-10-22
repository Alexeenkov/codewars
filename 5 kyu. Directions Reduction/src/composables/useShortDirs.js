export const useShortDirs = () => {
    const opposite = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST',
    };

    const getShortDirs = (arrDirs) => {
        return arrDirs.reduce((resultDirs, currentDir) => {
            if (opposite[currentDir] === resultDirs[resultDirs.length - 1]) {
                resultDirs.pop();
            } else {
                resultDirs.push(currentDir);
            }

            return resultDirs;
        }, []);
    };

    return {
        getShortDirs,
    }
};

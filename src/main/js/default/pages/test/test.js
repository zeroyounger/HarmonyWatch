const ABILITY_TYPE_EXTERNAL = 0;
const ABILITY_TYPE_INTERNAL = 1;
// syncOption(Optional, default sync): 0-Sync; 1-Async
const ACTION_SYNC = 0;
const ACTION_ASYNC = 1;
const ACTION_MESSAGE_CODE_PLUS = 1001;

export default {
    data: {
        title: 'World'
    },
    plus: async function() {
        var actionData = {};
        actionData.firstNum = 1024;
        actionData.secondNum = 2048;

        var action = {};
        action.bundleName = 'com.huawei.hiaceservice';
        action.abilityName = 'com.huawei.hiaceservice.CalcServiceAbility';
        action.messageCode = ACTION_MESSAGE_CODE_PLUS;
        action.data = actionData;
        action.abilityType = ABILITY_TYPE_EXTERNAL;
        action.syncOption = ACTION_SYNC;

        var result = await FeatureAbility.callAbility(action);
        var ret = JSON.parse(result);
        if (ret.code && ret.code == 0) {
            console.info('plus result is:' + JSON.stringify(ret.abilityResult));
        } else {
            if (ret.code) {
                console.error('plus error code:' + JSON.stringify(ret.code));
            } else {
                console.error('plus error undefined.');
            }
        }
    }
}

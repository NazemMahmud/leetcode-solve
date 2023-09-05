/**
 * 5. Longest Palindromic Substring
 * Medium
 */

/**
 * Brute force approach
 * take 1703 MS
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function(s) {
    if (n == 0) return "";
    if (n == 1) return s;

    let start = 0, maxLen = 0;

    for (let i = 0; i <s.length; i++) {
        for (let j = i; j <s.length; j++) {
            let temp = j -i + 1;
            if(check(s, i, j) && (temp > maxLen)) {
                maxLen = temp;
                start = i;
            }
        }
    }


    return s.substring(start, start + maxLen);
};

var check = function(s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}


/**
 * 343ms 33.33% Memory: 87.08MB 10.38%
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function(s) {
    if (s.length == 0) return "";
    if (s.length == 1) return s;
    let dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));
    let ans = s[0];

    for(let i=0; i<s.length; i++) {
        dp[i][i] = true
    }

    for(let i=s.length-1; i>-1; i--) {
        for(let j=i+1; j<s.length; j++) {
            if(s[i] == s[j] && (j-i<3 || dp[i+1][j-1])) {
                dp[i][j] = true;
                if (ans.length < j-i+1 ){
                    ans = s.substring(i, j+1);
                }
            }
        }
    }

    return ans;

};


/**
 * 61ms Beats 97.49% Memory 43.22MB 85.59%
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length == 0) return "";
    if (s.length == 1) return s;
    let maxLen = 0, start = 0;
    let i=0;
    while(i<s.length) {
        if (s.length - i < (maxLen / 2)) {
            break;
        }

        let left = i, right = i;
        while(s[right] == s[right+1] && right < s.length -1) {
            right++;
        }
        i = right + 1;

        while(left>0 && right < s.length-1 && s[left-1] == s[right+1]) {
            left--;
            right++;
        }

        let len = right - left +1;
        if (maxLen < len ){
            maxLen = len;
            start = left;
        }

    }

    return s.substring(start, start+maxLen);

};

function declutterElves(input) {
    var inputArray = input.split('\n');
    var commonItems = inputArray.map(function (rucksack) {
        var firstHalf = rucksack.substring(0, (rucksack.length) / 2).split('');
        var secondHalf = rucksack.substring(rucksack.length / 2).split('');
        return firstHalf.filter(function (elem) {
            return secondHalf.includes(elem);
        })[0];
    });
    commonItems.pop();
    var convertedToNums = commonItems.map(function (letter) {
        if (letter) {
            if (letter.toLowerCase() === letter) {
                return abcDict[letter];
            }
            else {
                return abcDict[letter.toLocaleLowerCase()] + 26;
            }
        }
    });
    var total = convertedToNums.reduce(function (p, c) { return p + c; }, 0);
    return total;
    //  return commonItems.reduce((previousValue, currentValue)=>previousValue+currentValue),0
}
// console.log(declutterElves(`WwcsbsWwspmFTGVV
// RHtMDHdSMnDBGMSDvnvDjtmpTpjTFggpmjmTFggTjmpP
// vtCSGRMBDzHddvBHBzRhrlcZhlLzWNlqblhzcr
// shhszHNHHZWqSzVNdClMjlFjBBbNTB
// tQQGmnrMnJnGfmvrRRPCjlbljFBdjFCjTjnP
// mRwtfGrMmJtwRDvQJQrJpMLSzVDHzhzHZqZzqSzcWVWH
// WsWWgrtgsrhTQtsFcWPcRMCCTvqvMvqNNqMMHlMq
// bBJrBGbzzLJznJrbSDGGJLqmlvqMqvlmLHRqRZZRNZ
// bzJfDGVSzVrJGwjVGPPpQthdPsPpjdphsc
// pJpCCBSWlczWWBWMHdMmMsFmpddrgF
// wfVqZZGVQvzsMqmMgHjm
// vDZGvPttQTVtGDQDDDGwbSCcSJSCJWTcRRSRczRJ
// HLVHsVWLwbWswbpWFWrrmThfTPNnhNSDDNhDfznTnhnS
// pBRcvGvvBtpGcqqQvgcphPfzfDGhzdzPDzDDhnhS
// ZQRvqBptjJgZCtJqqMMMLHWwMWZWHHFFHm
// PvPFPvLLLSvNFvQNWNPvrPLrZjwhMttTwtTtQZBwqjqtZqwM
// HJDDbHjgppzCDCmzpgzsGbCsTMZqZllqhJBhMTtVBBhMtMth
// zgGncmGGzHCnHDpDgDCGsmFLLPFjPRRWLRjdcjrcdRLd
// zHnWzntnBRWTSBzRBddpFvZVcHpLFvjvLppvHP
// MmmWmNGQhbCpZVLLbccvpj
// QDMCGrNWfwNznBJsJzDBdg
// tcRcZccZmdZJctRcjrlhNNDfrdNdSfNsNT
// QHQpBVvMpRMwgBgvnHRFlhrSsgNFThgTFFflNS
// vvHpVBBBGBppHvpLvHGbjmmtCqWLJJZRzZZZZb
// ZBtTDZRWsTsDZVWVZDmjpbLbpSSzmLpWrbrS
// MFNNFvvwFHwlhmNrCStLNtjzrb
// vwffwcHwflGqGflHJfDBBZtQVBgZQJtBBsnT
// pTJcmMJTspmpMZZJJZHCQQMzPBlQdWWWFzWP
// LDnwrdnDnqjfqgvfDjrfFlBBPFHFSHPQCBvQSSWB
// nLbjgLjdbrwVRcppsscJVRRR
// mHnfggmMtpHPPBCs
// PJjlQQRrJhJNPPTtBsCbCCTlpptd
// rSSDhNQwShRRjhmMPmzMDfPmfLzL
// HzLFBgrCthtFrrhFSCCCvBQNRVmJJJmnpnddmppddVtJ
// MPZsjDWPjZsVzNTzpVdRdZ
// qMfjWfwclsPsjwzqHgLFhwGFwHrFFrSC
// llllmSbhNmSbNzlPmRNCcgLLchHHpTGsCTQGpT
// dVjBrvBBVLJQsLpC
// frZBWBDMFndStFsSwzlPlq
// vmTVVtmJHwCwDllttTsrcPcMrfqPMMpjMq
// LQGBRgGGRNgGgBhgzHfpjPqsMjpLcLjrPLpq
// BdgzgSRGBnNHJtJlVStVmt
// FbDQsFjPVHFZFSbrVjSVvMJlGBJhDcqBBllJGccJnh
// RfTCTTpmppfgwCpwpLwRMnMGMlcPGqhddPcJnl
// zgLPLNCCpLggzmTzTWmVrjVvrNvjjjvbVHQZZH
// RBjjpwmRszBdvhLdSvpVpV
// GrbfbJWmQJGWrGZZQMbSLggfCgSHhCSgShghSC
// DWNDZQcrbWQrZJZGQQZPsztzBsPmBTzwcwRwjT
// rlvgglvZqbrbWbWWdvdmPHBBNMNJGqjGRRnHnPBJ
// cDFDcfcCDhLzsCfLDVpGPRJMPsRJMPNRnjHHGJ
// DCfMVDFVScVMVQlgmZgdmWQQmS
// nWTWWgwNgGDdBZBVcvDzzJccVlCzHD
// RLppMMLpRqfMtMjtMCHJFSpzHSvSpczJdl
// RdLRbQRjsRMrMRRMfbQLqPjbmnQgQWWwZmggnNTgnnWwhBhn
// TmzjMjrmjmjBmHLvGPpbvWGqJzJJ
// CfScwNDssDVCccdNVcNDQfbqJLqSLPpJpJJvJPpGTWJb
// nddCQTfQVVrHmjMnrMFM
// WHDnTwvwcwZmWwQTnBtgbVLLbgfSlTfrfb
// CPPGdJRzNhNpzPJtMgBLbgtlLLfLMz
// GJptpdFRhJwDmFHDjvnD
// PNcWDNnNDcLjDDcSRWtQFfzzzQgPgsssZtPZ
// MGhJRJGGrlpVGVHVCqqGqBQvzFzFfBvZvvtZtvFzvZvQ
// JmJplCrlMNdmjbNbWR
// pqpqFJPPSswJshNghg
// zTHHrrbLzDQHccfhqmDshgCwfmqm
// rtqqtTTHtzGLPWBdnGBSWGSS
// gmNvgVqjjqzfMRgrRtPcft
// WswSQwWWHGCsHQhlGGLLJRbLMRfRGcMb
// dQCRCWhhwCwFwQshhRTmmBmFjFTTVNpqTnTj
// FZvqSWqjjZvvrNSvbblcbslDppDHbcsS
// MmwLTwPmBwmLJJmLlWzWnDllHcHzcDHM
// QRwtQtLTwwQBTPfFfZdFvqqrFGWjrh
// MqlnnNvJJZnNNdJZZLvLJnMzjjCTCChgWjccWqcjhcgcWR
// tbddSHDBbHgHhHTCjh
// mffBfbpsFSdQQDbQsrlJvwJNLLJMrrlsJr
// RjqbNRRbDDqHndbcHDqdRHcChsffCQJJssZGpzpCpJphJd
// VrMmSbrWVMtMtLmQGCfZWJZCfpZfJW
// PgSPgTvSSHjjBbvbvq
// whclNQQfcCFCcrJRjmmHNWsmLs
// PPzMbqBPLVtnTppPTPzHJrGWJRRvsjjjRHssRb
// PtgPVZTtTLMtBzqPqttPVMClcdDcgCCfCQDSdSgCwlhh
// DrcrsvcNtLWSFPSFszbM
// HqTdHJdQhGJBHQHWWDTnnPzbMMzPnS
// hdwfqdhQJfjlccrfvNDLfl
// BBPCWvjvTLrHTHHPCTndfwhbdnnZZfDhJwfJVb
// msmgNMMcgmgczlmmgQNlddpVDDZpZpDfhZfJwsJF
// mmQmMgSgzmqSRllGmgjPHrvvwHttjLrLRWWB
// RwvDvhjhMvwlFNwNwCWCCWWLZcbGGZLGJVrppbZVcjmpmJ
// tfnfsStnPPfTfgnPSSzPflJZZZrlZJVzLLmZJrzVmG
// nPHqgfsHQnffqgSTldHTPnPHWMRFFqqFhNNNCwNCFMMhDMhh
// FmwFHmnlGJfnlSlmrfsSvWgZNWNvLvtqLqDJhWJD
// BVVTTMqRWvRZRbhW
// pMBPCzVPQcQsGqSFmPFwSF
// TcpTpwqZqMpZqlZCpZlwDjjcPNdgdPjHHHdvhHQgvv
// zQFBRbmsQbLLBnGBvFdPghddNgHjNSSj
// QnszWVzLfsLGbnGQbwpVtMrwZTqpCqpppr
// WrZmrJcGwZdGZZmHdJcwGWcZsdFFLqTtLVtSTLtvvLtLLqSs
// fnpCCQClfpQlzbbpQpflBpjhLVSTvFhjqtstVsjtstFVMs
// QBQRnbCRpnPngnbggCzzRClZwJHFHDwZJPJGWHwmNGHPZr
// fDhjvftQtDwgPhdRcRRP
// bbNSgllVNMCWVnbWmcdFdmmFdpFpRrPPPw
// NBzBglNzBvvGZDJQ
// rGbbtStjSdbGtDpjjJbbRRbdrcCsCCrFqhllrFHsFsCvqCWH
// TzgMMgmTVgzzTMLLfMHvTFsFCqHTvFsTvshF
// gLMPBgQmQmNzVZLPzPppjbRhhddGBGSttbpR
// zMJTpMzpVczHbCzVJVFCpJPngnBqVZqsRZZPnjqRgmjR
// wttwNdfLQwLhwhhDDhWvgRmnPqsQqjnBPSZRgjPS
// DdLwGGvNvhlvrrMFlFTcZrpC
// llBQWMScQlSSBjMrvrrPpFHFBDFDFJTmTtFFmF
// nzZzfVgzCNtnJppDHPnPpp
// LdRNfVdzbzCCjcvllMcsbtjj
// pWFwpFhprTnFfWwZrsBDmsqBvZvjjv
// VbcHCthtzQtNqBsvsZvQmQsj
// cltzzVcJSMtRWdhJLhRwdh
// lmmmLRdZnjBlGgVhNSVvRMWN
// bDwCqCGPbwpPwDPPpCpqpPbScvMSMSDWgVcSShNNVfgWWv
// bTpzqJHPFFJqbTHswLlGlBntGnjQtGBZTT
// pVjVlDDhmRPlHlHPWzWVWrVrcWztVdzv
// GCqGGGJSFbnLJLLfrLfPrLdgrrgfWd
// PbJSQGSsGnbMbqSFGBMMbsGTNwpTRwppDRsjwlNpsmHwDl
// GcnPbbbLqDPDBPPDlQ
// JtTChNfRpNJMTCfMTlJVsdVHvDddHBVmQm
// TzlffWNfjTfjjCjfTtRrLgbnbbnSSwbnLzZZzr
// hggWzjLhzhLhjzVWgpCpTFFHtCJFTJTHHHdG
// lvSBvNNSNSSmlbwmMJCGtJQCHmdT
// cfSlSSlvBDBPnlPPDZLsgtggZZVVfhzRgV
// gGVJGvVVZZLvQLWQppccpctpNptMhnhSjjnM
// fzQBsBzmwPzdQrRbSFNFnsSDchjnFhMN
// bCwQRbbCJvlGCHgL
// NMgdHVSqgQcVHmlllLDjlCLdjL
// whTRJtJTnthWBlLLLmlFtVmV
// wRhnGTpzzTRnVbzzWWbJwbhNQrZHfpNgMQpfZQHHNZZHHQ
// qNNlMdbNrlVsQQfswQNCmW
// LJzBvSdLSHpDJzzzHJnHnzFQCCmmswmfwBGhsQfWfCwW
// HzSvHppDDRvgHzzcnqTrTtllZdRrbRVVZZ
// TWVVVFVPpjVFtRfPBmmzMMPCvmLm
// hDDrwndQQbbhZDMSMvcflMLmfnBL
// grdggqsbrhdJJJrhbwbbsZGHVNHtTWpVBFVTTTVTHtNg
// tLbvnTCzCVnzzwVTJVlwltMFvQFQRFFrQPBFdNgrMBNF
// pShsqqmGjZfZccsqSfbdNBMMRQGBPgMdPMPF
// HhspDpjhSjbcSmcqhZDcZZjTttLVwlTJJVWtnWVlWHCltL
// DwQBvwBnBrSVRrZM
// JWWGRssgRsFgzsFPJrNHVMHrlVrPSMNjHH
// gspgFzRCFWLJpgqqRWgqpCJwnQCnhQvwcTdcdddnwbDfhf
// fMMCwFDGNNMTdTDLlVlZZmdZBdBtVr
// jjpjtbpRcPvSPnPnpPnvPPPnbZlmrWmLWHmHBWHlrmrmlZWl
// jqjjnPqngtQfGFftFq
// qnzhhbzzqGgsqGtnwcJrlCMlCjvcCCcrCRrvCv
// mVSNZdTQdVVWmVFHQrpCjpjDRvjMRjdLRt
// WBHZTHHTFWWNNBNHQTZPsPggghfgsnsgsffthszJ
// sDwpdMgvHrZgwbdggzZZgPhFNFFcjPPqhLhjMlPqLq
// JffJfnJGtBtCQQRBJZTQJJGfcNjqCLcFhFWCPLjhFLPjcPhl
// VZZVmtGQQZmHrwgddppb
// NNNlpjbVpGglNbvpTwBQQvfWvfBrWvBW
// JthDJsLhhHPcGcqPshJsshSBwCWwfWSLCfSfSSRBrfWB
// dhDtZqGmctZDtZHqDGVgVgNbbbFjndMFNlFg
// jqDVzzDMdDwsVQLCZVCRWLGBQC
// bbHFbSSpFbFHJHStJNbtJprZlCGLQsLGZRBLRQLQpLBClZ
// SmFmTPJvFTNbmmsMdqqjscwz
// RqMbHGJRJpgJgGgQjgrLTrTzjcrTrrLg
// lwfwdhnflPlbCsVVjhCSbV
// fwnNtwmlFZpbFZtM
// QNSQrLTNrLNQRRrfHFrSjqhblWtSltqlWqtWWl
// DvgBgnzgcvVZMljv
// DGJdjBPDngDnDjBpBmFpTRmRFLRRmmCmHH
// dtgSdTqdlvdJJvFqTvSqJqqRMPBtLHPBnWbsbWbsbWtWtWHV
// DjfCfmcpNrwZQCmmNrDZNZNpsHLHWBBbHVVcGGGbHGBbMVMB
// fpNjCfzLNZjTllvzdSgFgJ
// nHBfZmHTRwsZffjBnHfmRZHtLtdNPPlWvddWLWJlJldCldLC
// zwrbphMMVFzMwdCWNPlCbPdDCD
// hccMSpqShMSrhZTBwmTqHjqZmf
// NJGGLwGsTSsNlJZhmtgCVlbWQWlQMtCbvb
// pDjppDBRdjzqpHqDSDzjVMCCrCrWtgQWdtdQQCdb
// fHpfRBPRzDpBFSqcSBRBSNhPNwwNNswJLhmmLNGJZL
// RZbsPgnVDzTJcdGjDGmD
// NwfQHQtpfppQhjVVjqVNJJTN
// tLLtwSptVCSWpvVtRnrbWbMgFPMsgZss
// VsQjSwwVSwsZzsvdscZvfrhPRpqBrBrbpzMrrTMh
// JtNDTmtGJTmLCGFDCHtDhMMBRhqqRbPrfrbNRrbR
// GDWLlDnFgZdTSTWv
// gfQHRRpQgRqNSBtjqwjztzjtnL
// FvsPgvDlFcmvmTLlBMVztnLwWLzL
// cvZGDcvbPcmbTbrcDDPgvbTJdJfJHRhZSRSpRRfHdSpSZd
// FGHHHWvBWrHHrWVZJvVtcSrtrTcrtcjMTjStSM
// swpwfRhRmmmRQDzcJlcqMSMMqtbMTz
// dQDRDDRQfmmQDNsLfwRJvZJWFWVnPWvvPddBnC
// zVhHvhMVTnMJgcTzMcfGJtfBWRtBRqJWtqJb
// hlZjZSQCZtfBbGjqbb
// SQDNwplrDVnhDcVHgT
// HHZmttZVLVMQQJwMfcDRfDbbMN
// phWvTgBqqgBWsTPTzhWzhzfNGNNwfqfcDwJRRbNcJcbl
// FnTsvnhppTPFTBpPzPvpBBpFVmtfCjfmjtCmFdStLmtdfjSd
// hMTPPMNlLZNSGNbRBB
// gjmrsrttsCnsCsttVsjvttvtZGFHdbZGWWWdZSWddBHHnSWH
// BmvptjsrfjBgsvvfgmfQchMpMqqhcQPMMPMhLQ
// dJHGnrJJpGpDpFzzDmfsfSSCbfTfMbbRDb
// vLcwtWNgtVtSNWmTmTMCmhNhTRfM
// jqVgqVvWwwLwwgqZgjVSrPGzHHHqFnrHnFGHJGdr
// QcQcdgbzwJnzfgVnVwdHQbdBrrpplHvmhLjrlTphppLrjl
// MsPssfSZMWGWqWssSNPqrmmLBvjhqTvhjBprhB
// GRDDZMFNMGFCSNWFPDMMFWNnwVtdVdQfcgtddwQwzRJfQd
// pMqCMBGpMMCnwnpBMGBlbVRFJFWsJzRdzHlWzzJdJsJd
// jLLZjDgPbNPZTDbvftvZgzRFsRzRrRRHWFsJsFJc
// TZZLDPjtmDmbqQGwQnVM
// RjnNhBnnNNmJmBNhrqGpsHbHtstgTtTjqb
// WVMfWwQTzWZDMtlsfldqpplstf
// WVTWSTzwQWSSvQVZCQPTSZPvBcnmcvnrhmNcRFncNLRLJmnB
// lffQcnNTQBBcwqsdcqjSspcWtD
// MPMGrHGMMTqWTtDg
// VGRGLrJHZzLHPzTNTmmBfZQFTNBQ
// lQBPPrBrlnqBgSRhgZZZrLJr
// VNcWMDZbJHhWfWff
// VwvMwMvdwvdwjcwdwDDqsqsZQqPPzqzldPQtps
// VVJcZJVrRSdcsddfsvvbvFZBnngBMzMZFD
// hLLqLpqqWWphWjhlGlCHDFgzbvFBbgBFtnQpnngg
// HlhlmmHBTqTHHmlLqjTGhHhPdwdmsdcSNSfNJRrRcfwVJdrr
// HmhvmRzzHHrRMBJBjNJGDJRnJD
// cbqcPqLWZwsgQWZwWPwWgPPbntJnrNftNNNBtNJJNDBNqdjB
// lgwWgggQcWSzrlTHMHlp
// FZhQpClCWLBlrNDZvrwrrNSH
// ztTfjMjJjgsGrqvzDGwG
// bMjfnjndjnJtfgMTwPjFhQhCLdQCFWQQLWQhch
// PtrqPrrMCPChzCtLFRbtNgbdTjbF
// GdZGvJSWWDGplFjbjLjLSTlL
// vspvnZsVppBdBnBpDCszhzMsMzzPzPhcPC
// PdCtdfCMfGmtfmtBSWrMQwSlwWwJNQ
// qTqbcjqHTZTbcDqczTjjZvWrQvVWJQSVQZZSVVrJNr
// qbqjRFTcHTcDFgcczRqFrPsGGGgnhtGssCdnffGmsP
// vVbcMvqjjjmHCBCBBmBSSH
// PzzLTrcrwQgfLGrJBHSGFSCHtRFBJt
// cfsPrLDwQNgsrTNTQgLwVpWnVWvMNvqjjqvpMvlj
// jbqZNjLbZQvcfhhQ
// CWdCDWWMCgmJDnJmdQVzMSchvfcQVFShzf
// WPgWGRWRHdPBsttrHvNtrl
// MCJCCMCqcCqJsnssjQRlTvQQQQqTvqfQ
// HGVmwmLVlZRzcGZG
// FcchHmDFpFbDMDMbntsJ
// vfNvvttvDRcrvRNRNTLDNRcVsFhwVBVTwbbFFVbVhbJMBB
// CJGgSJHdgPPSnQnjnddHGGFMSMwMMsmsFMMFhFShMWMM
// dGCdjgzHCPPGlHDDqJtqRcqJlpfR
// CwtqqvwLwnwhtRLtdRnwnnRhPHpLLppTPPpTVfTHzJWVLTWB
// sGDsZDllDrMFZVmGgsmDMlmHpJBHpcJFPPTHfJJPzfTHWz
// srgVlGSgZVGGrRvwQwdqwtCvnS
// MLPgDrgLzThhCTgg
// GVfCbvVbVvhBHlmhvhHv
// ZqRQffRwtNZWVZfZSMsSssncnDCDnL
// VwBNhNNmhJswqjJsRzPgDvSgJvtgvgDt
// rRMblbHFfRrSWvPPPgMzLW
// ZFpFpCcprGfbrGfGCHclZfnGqmsjmBdNVjQqRBnqBsVNQwBh
// VLQlZWQbcPgcPmWbgmDWLQzdpGMTTqdpMTNsbGsNpMSqdq
// HChrwfffhJtfHwJTsDqThhDMpTGsjj
// HvffCrtBzclQZvQD
// dCBVJJmrJDlBdQJWZTTsWbdWThWpbM
// FHjSPjwqwssSgqTMGbGWhTMHMMZG
// FwLvLfLjjSPqFqgzwffFSvrlDJvrQrDVrnmBvrJsQm
// hZCRbddrgrRSVgcGZjjLFGLZFQFp
// nzPvMsPvtmvPNssPMqpcWVjGGcGLlqGcGN
// TBzmTmzmVmrBSBRrRgdR
// bwZZmwfFmcfCRswNWNBsjC
// VDSdglSStRCCTNCD
// VVVppGHGlrQnnGJbMmnmCh
// nFhgnFVNtgtFVssgdgVtVtsqJPTNJvDSNqTZZzbzTDDzDq
// HqLHqcwlBjLzPvPJCCvJ
// HGrlHqlllHBppRrlwWFnnWfFFVhMnnWdFhfn
// FsMFVszjggMMzWlPJlPPlLQsJv
// nqnBSNlfZqSvLHnHvWLQTW
// hShpfCCSRtfjgFjMzdjlpr
// jsbDsQnnwPsFbZgSltWGdgJgpnSp
// SCVvLhLRrzCNBhrCvddMJpWdWGvJGlgtpv
// cHLBBVCcCNHrbcSQFwQTbDws
// rMlbLgrRgpwTDbflcnHtSScwHdJdwHJB
// CQCjjZPzGGzCzZQvBVBNdQNSJVcJ
// jsPhCzhPqFZzZzChFlsbRRLrMfTbbcLTpD
// dqjzmmmQBjBHCmWrgVGWrrrvrpgVpM
// PLJnTFbJnhTDzrGgMlvrFMzF
// SssPcDttntDSsLcCzHBmmwcmZQqH
// fFfFSPHllPRpRfnmmFfHvHjgbsBQjsptBdBTTddjsDdt
// ZqLJCLCZzzTgWjdzDjzb
// ZhNLMrNcGrchLqcCVMqRvlSnFnRnmmGRggnPnP
// HMCMCMrHfwMHtFwTtgHHbVjjbsRZDwDVRbZqjhBD
// cDpmpdpNLNDcdZjZqZBNBqssRR
// SLJSdPcznSvdvDcHFCftFTFWCTHnWt
// NlMmlPClmdGldRZHJs
// tgJJcJQcntHBsnBt
// TfSgQhhccczSVQqrgSgTjFWqLWmwLFNJLWWPPwqM
// GGwTHqWVdnTTVVqgngzzqHzGFbJspFccRsjDpDcjsRFDsdjR
// rtLflllZSrhQPLBtQStZvhjDNjbcDNDRNFjCsCDCFs
// mPLBQPtvtQZtBlLSmMqVGwHbVMqTHWmz
// VvJCrqTvPvQrCpRNVRFGfZfmfG
// HMzsdWsjhZSsJJZNZf
// wHlbjnlzWCvqJBQlrD
// FnVRRsVdSnSnFSRqTVdqBBDBhrDdmcddMcMQMhzm
// HtZvJwHlgjlGlHJLNjJrMmrcmDQfDLczDrMhhh
// vGGpJjttvlZljZllZvJZvwGqsSTRWSCpnCWTVPVmWWTWWn
// wSHCNwwmcSMLSDFcwwSSHQvZnQjLZffZjZZbVZjVVb
// JqsNJJGGqprJNtpWhGhspfnffTnTvZvVbZnTrfBQvV
// GsWhdGtPWpghJRqhtNPmClczSlDglHMlczmwCH
// TzRpjVRjFpVLTTdgrTgrGsZwrZZwgg
// vQfSBdbDbMbQNBJrlhmGnrgrgwZhvm
// SHSCbdbddcVWqqFPCLqR
// `))
function removeNewLineAndGroup(input) {
    return input.split('\n').map(function (elem, index) {
        if (index % 3 === 0) {
            return elem + '&';
        }
        return elem;
    });
}
function divideSacksIntoGroupsOfThree(input) {
    return input.join(' ').split('&').map(function (elem) {
        return elem.split(' ').slice(1);
    });
}
// Multiple for loops as an option
function declutterElves2(input) {
    var threeSacks = removeNewLineAndGroup(input);
    var splitSacks = divideSacksIntoGroupsOfThree(threeSacks);
    splitSacks.shift();
    splitSacks.pop();
    var badgeArray = splitSacks.map(function (group) {
        return group[0].split('').map(function (char) {
            if (group[1].includes(char) && group[2].includes(char)) {
                return char;
                // break ?? Option 
            }
        });
    });
    return badgeArray;
}
console.log(declutterElves2("WwcsbsWwspmFTGVV\nRHtMDHdSMnDBGMSDvnvDjtmpTpjTFggpmjmTFggTjmpP\nvtCSGRMBDzHddvBHBzRhrlcZhlLzWNlqblhzcr\nshhszHNHHZWqSzVNdClMjlFjBBbNTB\ntQQGmnrMnJnGfmvrRRPCjlbljFBdjFCjTjnP\nmRwtfGrMmJtwRDvQJQrJpMLSzVDHzhzHZqZzqSzcWVWH\nWsWWgrtgsrhTQtsFcWPcRMCCTvqvMvqNNqMMHlMq\nbBJrBGbzzLJznJrbSDGGJLqmlvqMqvlmLHRqRZZRNZ\nbzJfDGVSzVrJGwjVGPPpQthdPsPpjdphsc\npJpCCBSWlczWWBWMHdMmMsFmpddrgF\nwfVqZZGVQvzsMqmMgHjm\nvDZGvPttQTVtGDQDDDGwbSCcSJSCJWTcRRSRczRJ\nHLVHsVWLwbWswbpWFWrrmThfTPNnhNSDDNhDfznTnhnS\npBRcvGvvBtpGcqqQvgcphPfzfDGhzdzPDzDDhnhS\nZQRvqBptjJgZCtJqqMMMLHWwMWZWHHFFHm\nPvPFPvLLLSvNFvQNWNPvrPLrZjwhMttTwtTtQZBwqjqtZqwM\nHJDDbHjgppzCDCmzpgzsGbCsTMZqZllqhJBhMTtVBBhMtMth\nzgGncmGGzHCnHDpDgDCGsmFLLPFjPRRWLRjdcjrcdRLd\nzHnWzntnBRWTSBzRBddpFvZVcHpLFvjvLppvHP\nMmmWmNGQhbCpZVLLbccvpj\nQDMCGrNWfwNznBJsJzDBdg\ntcRcZccZmdZJctRcjrlhNNDfrdNdSfNsNT\nQHQpBVvMpRMwgBgvnHRFlhrSsgNFThgTFFflNS\nvvHpVBBBGBppHvpLvHGbjmmtCqWLJJZRzZZZZb\nZBtTDZRWsTsDZVWVZDmjpbLbpSSzmLpWrbrS\nMFNNFvvwFHwlhmNrCStLNtjzrb\nvwffwcHwflGqGflHJfDBBZtQVBgZQJtBBsnT\npTJcmMJTspmpMZZJJZHCQQMzPBlQdWWWFzWP\nLDnwrdnDnqjfqgvfDjrfFlBBPFHFSHPQCBvQSSWB\nnLbjgLjdbrwVRcppsscJVRRR\nmHnfggmMtpHPPBCs\nPJjlQQRrJhJNPPTtBsCbCCTlpptd\nrSSDhNQwShRRjhmMPmzMDfPmfLzL\nHzLFBgrCthtFrrhFSCCCvBQNRVmJJJmnpnddmppddVtJ\nMPZsjDWPjZsVzNTzpVdRdZ\nqMfjWfwclsPsjwzqHgLFhwGFwHrFFrSC\nllllmSbhNmSbNzlPmRNCcgLLchHHpTGsCTQGpT\ndVjBrvBBVLJQsLpC\nfrZBWBDMFndStFsSwzlPlq\nvmTVVtmJHwCwDllttTsrcPcMrfqPMMpjMq\nLQGBRgGGRNgGgBhgzHfpjPqsMjpLcLjrPLpq\nBdgzgSRGBnNHJtJlVStVmt\nFbDQsFjPVHFZFSbrVjSVvMJlGBJhDcqBBllJGccJnh\nRfTCTTpmppfgwCpwpLwRMnMGMlcPGqhddPcJnl\nzgLPLNCCpLggzmTzTWmVrjVvrNvjjjvbVHQZZH\nRBjjpwmRszBdvhLdSvpVpV\nGrbfbJWmQJGWrGZZQMbSLggfCgSHhCSgShghSC\nDWNDZQcrbWQrZJZGQQZPsztzBsPmBTzwcwRwjT\nrlvgglvZqbrbWbWWdvdmPHBBNMNJGqjGRRnHnPBJ\ncDFDcfcCDhLzsCfLDVpGPRJMPsRJMPNRnjHHGJ\nDCfMVDFVScVMVQlgmZgdmWQQmS\nnWTWWgwNgGDdBZBVcvDzzJccVlCzHD\nRLppMMLpRqfMtMjtMCHJFSpzHSvSpczJdl\nRdLRbQRjsRMrMRRMfbQLqPjbmnQgQWWwZmggnNTgnnWwhBhn\nTmzjMjrmjmjBmHLvGPpbvWGqJzJJ\nCfScwNDssDVCccdNVcNDQfbqJLqSLPpJpJJvJPpGTWJb\nnddCQTfQVVrHmjMnrMFM\nWHDnTwvwcwZmWwQTnBtgbVLLbgfSlTfrfb\nCPPGdJRzNhNpzPJtMgBLbgtlLLfLMz\nGJptpdFRhJwDmFHDjvnD\nPNcWDNnNDcLjDDcSRWtQFfzzzQgPgsssZtPZ\nMGhJRJGGrlpVGVHVCqqGqBQvzFzFfBvZvvtZtvFzvZvQ\nJmJplCrlMNdmjbNbWR\npqpqFJPPSswJshNghg\nzTHHrrbLzDQHccfhqmDshgCwfmqm\nrtqqtTTHtzGLPWBdnGBSWGSS\ngmNvgVqjjqzfMRgrRtPcft\nWswSQwWWHGCsHQhlGGLLJRbLMRfRGcMb\ndQCRCWhhwCwFwQshhRTmmBmFjFTTVNpqTnTj\nFZvqSWqjjZvvrNSvbblcbslDppDHbcsS\nMmwLTwPmBwmLJJmLlWzWnDllHcHzcDHM\nQRwtQtLTwwQBTPfFfZdFvqqrFGWjrh\nMqlnnNvJJZnNNdJZZLvLJnMzjjCTCChgWjccWqcjhcgcWR\ntbddSHDBbHgHhHTCjh\nmffBfbpsFSdQQDbQsrlJvwJNLLJMrrlsJr\nRjqbNRRbDDqHndbcHDqdRHcChsffCQJJssZGpzpCpJphJd\nVrMmSbrWVMtMtLmQGCfZWJZCfpZfJW\nPgSPgTvSSHjjBbvbvq\nwhclNQQfcCFCcrJRjmmHNWsmLs\nPPzMbqBPLVtnTppPTPzHJrGWJRRvsjjjRHssRb\nPtgPVZTtTLMtBzqPqttPVMClcdDcgCCfCQDSdSgCwlhh\nDrcrsvcNtLWSFPSFszbM\nHqTdHJdQhGJBHQHWWDTnnPzbMMzPnS\nhdwfqdhQJfjlccrfvNDLfl\nBBPCWvjvTLrHTHHPCTndfwhbdnnZZfDhJwfJVb\nmsmgNMMcgmgczlmmgQNlddpVDDZpZpDfhZfJwsJF\nmmQmMgSgzmqSRllGmgjPHrvvwHttjLrLRWWB\nRwvDvhjhMvwlFNwNwCWCCWWLZcbGGZLGJVrppbZVcjmpmJ\ntfnfsStnPPfTfgnPSSzPflJZZZrlZJVzLLmZJrzVmG\nnPHqgfsHQnffqgSTldHTPnPHWMRFFqqFhNNNCwNCFMMhDMhh\nFmwFHmnlGJfnlSlmrfsSvWgZNWNvLvtqLqDJhWJD\nBVVTTMqRWvRZRbhW\npMBPCzVPQcQsGqSFmPFwSF\nTcpTpwqZqMpZqlZCpZlwDjjcPNdgdPjHHHdvhHQgvv\nzQFBRbmsQbLLBnGBvFdPghddNgHjNSSj\nQnszWVzLfsLGbnGQbwpVtMrwZTqpCqpppr\nWrZmrJcGwZdGZZmHdJcwGWcZsdFFLqTtLVtSTLtvvLtLLqSs\nfnpCCQClfpQlzbbpQpflBpjhLVSTvFhjqtstVsjtstFVMs\nQBQRnbCRpnPngnbggCzzRClZwJHFHDwZJPJGWHwmNGHPZr\nfDhjvftQtDwgPhdRcRRP\nbbNSgllVNMCWVnbWmcdFdmmFdpFpRrPPPw\nNBzBglNzBvvGZDJQ\nrGbbtStjSdbGtDpjjJbbRRbdrcCsCCrFqhllrFHsFsCvqCWH\nTzgMMgmTVgzzTMLLfMHvTFsFCqHTvFsTvshF\ngLMPBgQmQmNzVZLPzPppjbRhhddGBGSttbpR\nzMJTpMzpVczHbCzVJVFCpJPngnBqVZqsRZZPnjqRgmjR\nwttwNdfLQwLhwhhDDhWvgRmnPqsQqjnBPSZRgjPS\nDdLwGGvNvhlvrrMFlFTcZrpC\nllBQWMScQlSSBjMrvrrPpFHFBDFDFJTmTtFFmF\nnzZzfVgzCNtnJppDHPnPpp\nLdRNfVdzbzCCjcvllMcsbtjj\npWFwpFhprTnFfWwZrsBDmsqBvZvjjv\nVbcHCthtzQtNqBsvsZvQmQsj\ncltzzVcJSMtRWdhJLhRwdh\nlmmmLRdZnjBlGgVhNSVvRMWN\nbDwCqCGPbwpPwDPPpCpqpPbScvMSMSDWgVcSShNNVfgWWv\nbTpzqJHPFFJqbTHswLlGlBntGnjQtGBZTT\npVjVlDDhmRPlHlHPWzWVWrVrcWztVdzv\nGCqGGGJSFbnLJLLfrLfPrLdgrrgfWd\nPbJSQGSsGnbMbqSFGBMMbsGTNwpTRwppDRsjwlNpsmHwDl\nGcnPbbbLqDPDBPPDlQ\nJtTChNfRpNJMTCfMTlJVsdVHvDddHBVmQm\nTzlffWNfjTfjjCjfTtRrLgbnbbnSSwbnLzZZzr\nhggWzjLhzhLhjzVWgpCpTFFHtCJFTJTHHHdG\nlvSBvNNSNSSmlbwmMJCGtJQCHmdT\ncfSlSSlvBDBPnlPPDZLsgtggZZVVfhzRgV\ngGVJGvVVZZLvQLWQppccpctpNptMhnhSjjnM\nfzQBsBzmwPzdQrRbSFNFnsSDchjnFhMN\nbCwQRbbCJvlGCHgL\nNMgdHVSqgQcVHmlllLDjlCLdjL\nwhTRJtJTnthWBlLLLmlFtVmV\nwRhnGTpzzTRnVbzzWWbJwbhNQrZHfpNgMQpfZQHHNZZHHQ\nqNNlMdbNrlVsQQfswQNCmW\nLJzBvSdLSHpDJzzzHJnHnzFQCCmmswmfwBGhsQfWfCwW\nHzSvHppDDRvgHzzcnqTrTtllZdRrbRVVZZ\nTWVVVFVPpjVFtRfPBmmzMMPCvmLm\nhDDrwndQQbbhZDMSMvcflMLmfnBL\ngrdggqsbrhdJJJrhbwbbsZGHVNHtTWpVBFVTTTVTHtNg\ntLbvnTCzCVnzzwVTJVlwltMFvQFQRFFrQPBFdNgrMBNF\npShsqqmGjZfZccsqSfbdNBMMRQGBPgMdPMPF\nHhspDpjhSjbcSmcqhZDcZZjTttLVwlTJJVWtnWVlWHCltL\nDwQBvwBnBrSVRrZM\nJWWGRssgRsFgzsFPJrNHVMHrlVrPSMNjHH\ngspgFzRCFWLJpgqqRWgqpCJwnQCnhQvwcTdcdddnwbDfhf\nfMMCwFDGNNMTdTDLlVlZZmdZBdBtVr\njjpjtbpRcPvSPnPnpPnvPPPnbZlmrWmLWHmHBWHlrmrmlZWl\njqjjnPqngtQfGFftFq\nqnzhhbzzqGgsqGtnwcJrlCMlCjvcCCcrCRrvCv\nmVSNZdTQdVVWmVFHQrpCjpjDRvjMRjdLRt\nWBHZTHHTFWWNNBNHQTZPsPggghfgsnsgsffthszJ\nsDwpdMgvHrZgwbdggzZZgPhFNFFcjPPqhLhjMlPqLq\nJffJfnJGtBtCQQRBJZTQJJGfcNjqCLcFhFWCPLjhFLPjcPhl\nVZZVmtGQQZmHrwgddppb\nNNNlpjbVpGglNbvpTwBQQvfWvfBrWvBW\nJthDJsLhhHPcGcqPshJsshSBwCWwfWSLCfSfSSRBrfWB\ndhDtZqGmctZDtZHqDGVgVgNbbbFjndMFNlFg\njqDVzzDMdDwsVQLCZVCRWLGBQC\nbbHFbSSpFbFHJHStJNbtJprZlCGLQsLGZRBLRQLQpLBClZ\nSmFmTPJvFTNbmmsMdqqjscwz\nRqMbHGJRJpgJgGgQjgrLTrTzjcrTrrLg\nlwfwdhnflPlbCsVVjhCSbV\nfwnNtwmlFZpbFZtM\nQNSQrLTNrLNQRRrfHFrSjqhblWtSltqlWqtWWl\nDvgBgnzgcvVZMljv\nDGJdjBPDngDnDjBpBmFpTRmRFLRRmmCmHH\ndtgSdTqdlvdJJvFqTvSqJqqRMPBtLHPBnWbsbWbsbWtWtWHV\nDjfCfmcpNrwZQCmmNrDZNZNpsHLHWBBbHVVcGGGbHGBbMVMB\nfpNjCfzLNZjTllvzdSgFgJ\nnHBfZmHTRwsZffjBnHfmRZHtLtdNPPlWvddWLWJlJldCldLC\nzwrbphMMVFzMwdCWNPlCbPdDCD\nhccMSpqShMSrhZTBwmTqHjqZmf\nNJGGLwGsTSsNlJZhmtgCVlbWQWlQMtCbvb\npDjppDBRdjzqpHqDSDzjVMCCrCrWtgQWdtdQQCdb\nfHpfRBPRzDpBFSqcSBRBSNhPNwwNNswJLhmmLNGJZL\nRZbsPgnVDzTJcdGjDGmD\nNwfQHQtpfppQhjVVjqVNJJTN\ntLLtwSptVCSWpvVtRnrbWbMgFPMsgZss\nVsQjSwwVSwsZzsvdscZvfrhPRpqBrBrbpzMrrTMh\nJtNDTmtGJTmLCGFDCHtDhMMBRhqqRbPrfrbNRrbR\nGDWLlDnFgZdTSTWv\ngfQHRRpQgRqNSBtjqwjztzjtnL\nFvsPgvDlFcmvmTLlBMVztnLwWLzL\ncvZGDcvbPcmbTbrcDDPgvbTJdJfJHRhZSRSpRRfHdSpSZd\nFGHHHWvBWrHHrWVZJvVtcSrtrTcrtcjMTjStSM\nswpwfRhRmmmRQDzcJlcqMSMMqtbMTz\ndQDRDDRQfmmQDNsLfwRJvZJWFWVnPWvvPddBnC\nzVhHvhMVTnMJgcTzMcfGJtfBWRtBRqJWtqJb\nhlZjZSQCZtfBbGjqbb\nSQDNwplrDVnhDcVHgT\nHHZmttZVLVMQQJwMfcDRfDbbMN\nphWvTgBqqgBWsTPTzhWzhzfNGNNwfqfcDwJRRbNcJcbl\nFnTsvnhppTPFTBpPzPvpBBpFVmtfCjfmjtCmFdStLmtdfjSd\nhMTPPMNlLZNSGNbRBB\ngjmrsrttsCnsCsttVsjvttvtZGFHdbZGWWWdZSWddBHHnSWH\nBmvptjsrfjBgsvvfgmfQchMpMqqhcQPMMPMhLQ\ndJHGnrJJpGpDpFzzDmfsfSSCbfTfMbbRDb\nvLcwtWNgtVtSNWmTmTMCmhNhTRfM\njqVgqVvWwwLwwgqZgjVSrPGzHHHqFnrHnFGHJGdr\nQcQcdgbzwJnzfgVnVwdHQbdBrrpplHvmhLjrlTphppLrjl\nMsPssfSZMWGWqWssSNPqrmmLBvjhqTvhjBprhB\nGRDDZMFNMGFCSNWFPDMMFWNnwVtdVdQfcgtddwQwzRJfQd\npMqCMBGpMMCnwnpBMGBlbVRFJFWsJzRdzHlWzzJdJsJd\njLLZjDgPbNPZTDbvftvZgzRFsRzRrRRHWFsJsFJc\nTZZLDPjtmDmbqQGwQnVM\nRjnNhBnnNNmJmBNhrqGpsHbHtstgTtTjqb\nWVMfWwQTzWZDMtlsfldqpplstf\nWVTWSTzwQWSSvQVZCQPTSZPvBcnmcvnrhmNcRFncNLRLJmnB\nlffQcnNTQBBcwqsdcqjSspcWtD\nMPMGrHGMMTqWTtDg\nVGRGLrJHZzLHPzTNTmmBfZQFTNBQ\nlQBPPrBrlnqBgSRhgZZZrLJr\nVNcWMDZbJHhWfWff\nVwvMwMvdwvdwjcwdwDDqsqsZQqPPzqzldPQtps\nVVJcZJVrRSdcsddfsvvbvFZBnngBMzMZFD\nhLLqLpqqWWphWjhlGlCHDFgzbvFBbgBFtnQpnngg\nHlhlmmHBTqTHHmlLqjTGhHhPdwdmsdcSNSfNJRrRcfwVJdrr\nHmhvmRzzHHrRMBJBjNJGDJRnJD\ncbqcPqLWZwsgQWZwWPwWgPPbntJnrNftNNNBtNJJNDBNqdjB\nlgwWgggQcWSzrlTHMHlp\nFZhQpClCWLBlrNDZvrwrrNSH\nztTfjMjJjgsGrqvzDGwG\nbMjfnjndjnJtfgMTwPjFhQhCLdQCFWQQLWQhch\nPtrqPrrMCPChzCtLFRbtNgbdTjbF\nGdZGvJSWWDGplFjbjLjLSTlL\nvspvnZsVppBdBnBpDCszhzMsMzzPzPhcPC\nPdCtdfCMfGmtfmtBSWrMQwSlwWwJNQ\nqTqbcjqHTZTbcDqczTjjZvWrQvVWJQSVQZZSVVrJNr\nqbqjRFTcHTcDFgcczRqFrPsGGGgnhtGssCdnffGmsP\nvVbcMvqjjjmHCBCBBmBSSH\nPzzLTrcrwQgfLGrJBHSGFSCHtRFBJt\ncfsPrLDwQNgsrTNTQgLwVpWnVWvMNvqjjqvpMvlj\njbqZNjLbZQvcfhhQ\nCWdCDWWMCgmJDnJmdQVzMSchvfcQVFShzf\nWPgWGRWRHdPBsttrHvNtrl\nMCJCCMCqcCqJsnssjQRlTvQQQQqTvqfQ\nHGVmwmLVlZRzcGZG\nFcchHmDFpFbDMDMbntsJ\nvfNvvttvDRcrvRNRNTLDNRcVsFhwVBVTwbbFFVbVhbJMBB\nCJGgSJHdgPPSnQnjnddHGGFMSMwMMsmsFMMFhFShMWMM\ndGCdjgzHCPPGlHDDqJtqRcqJlpfR\nCwtqqvwLwnwhtRLtdRnwnnRhPHpLLppTPPpTVfTHzJWVLTWB\nsGDsZDllDrMFZVmGgsmDMlmHpJBHpcJFPPTHfJJPzfTHWz\nsrgVlGSgZVGGrRvwQwdqwtCvnS\nMLPgDrgLzThhCTgg\nGVfCbvVbVvhBHlmhvhHv\nZqRQffRwtNZWVZfZSMsSssncnDCDnL\nVwBNhNNmhJswqjJsRzPgDvSgJvtgvgDt\nrRMblbHFfRrSWvPPPgMzLW\nZFpFpCcprGfbrGfGCHclZfnGqmsjmBdNVjQqRBnqBsVNQwBh\nVLQlZWQbcPgcPmWbgmDWLQzdpGMTTqdpMTNsbGsNpMSqdq\nHChrwfffhJtfHwJTsDqThhDMpTGsjj\nHvffCrtBzclQZvQD\ndCBVJJmrJDlBdQJWZTTsWbdWThWpbM\nFHjSPjwqwssSgqTMGbGWhTMHMMZG\nFwLvLfLjjSPqFqgzwffFSvrlDJvrQrDVrnmBvrJsQm\nhZCRbddrgrRSVgcGZjjLFGLZFQFp\nnzPvMsPvtmvPNssPMqpcWVjGGcGLlqGcGN\nTBzmTmzmVmrBSBRrRgdR\nbwZZmwfFmcfCRswNWNBsjC\nVDSdglSStRCCTNCD\nVVVppGHGlrQnnGJbMmnmCh\nnFhgnFVNtgtFVssgdgVtVtsqJPTNJvDSNqTZZzbzTDDzDq\nHqLHqcwlBjLzPvPJCCvJ\nHGrlHqlllHBppRrlwWFnnWfFFVhMnnWdFhfn\nFsMFVszjggMMzWlPJlPPlLQsJv\nnqnBSNlfZqSvLHnHvWLQTW\nhShpfCCSRtfjgFjMzdjlpr\njsbDsQnnwPsFbZgSltWGdgJgpnSp\nSCVvLhLRrzCNBhrCvddMJpWdWGvJGlgtpv\ncHLBBVCcCNHrbcSQFwQTbDws\nrMlbLgrRgpwTDbflcnHtSScwHdJdwHJB\nCQCjjZPzGGzCzZQvBVBNdQNSJVcJ\njsPhCzhPqFZzZzChFlsbRRLrMfTbbcLTpD\ndqjzmmmQBjBHCmWrgVGWrrrvrpgVpM\nPLJnTFbJnhTDzrGgMlvrFMzF\nSssPcDttntDSsLcCzHBmmwcmZQqH\nfFfFSPHllPRpRfnmmFfHvHjgbsBQjsptBdBTTddjsDdt\nZqLJCLCZzzTgWjdzDjzb\nZhNLMrNcGrchLqcCVMqRvlSnFnRnmmGRggnPnP\nHMCMCMrHfwMHtFwTtgHHbVjjbsRZDwDVRbZqjhBD\ncDpmpdpNLNDcdZjZqZBNBqssRR\nSLJSdPcznSvdvDcHFCftFTFWCTHnWt\nNlMmlPClmdGldRZHJs\ntgJJcJQcntHBsnBt\nTfSgQhhccczSVQqrgSgTjFWqLWmwLFNJLWWPPwqM\nGGwTHqWVdnTTVVqgngzzqHzGFbJspFccRsjDpDcjsRFDsdjR\nrtLflllZSrhQPLBtQStZvhjDNjbcDNDRNFjCsCDCFs\nmPLBQPtvtQZtBlLSmMqVGwHbVMqTHWmz\nVvJCrqTvPvQrCpRNVRFGfZfmfG\nHMzsdWsjhZSsJJZNZf\nwHlbjnlzWCvqJBQlrD\nFnVRRsVdSnSnFSRqTVdqBBDBhrDdmcddMcMQMhzm\nHtZvJwHlgjlGlHJLNjJrMmrcmDQfDLczDrMhhh\nvGGpJjttvlZljZllZvJZvwGqsSTRWSCpnCWTVPVmWWTWWn\nwSHCNwwmcSMLSDFcwwSSHQvZnQjLZffZjZZbVZjVVb\nJqsNJJGGqprJNtpWhGhspfnffTnTvZvVbZnTrfBQvV\nGsWhdGtPWpghJRqhtNPmClczSlDglHMlczmwCH\nTzRpjVRjFpVLTTdgrTgrGsZwrZZwgg\nvQfSBdbDbMbQNBJrlhmGnrgrgwZhvm\nSHSCbdbddcVWqqFPCLqR\n"));
var abcDict = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
};

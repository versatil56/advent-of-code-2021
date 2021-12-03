describe('On the 1st day of Christmas', () => {
    describe('Advent Of Code brought to me', () => {
      describe("A list of raw measurements", () => {
        it('formatted into an array', () => {
          let measurements = parseMeasurements(rawMeasurements);
  
          expect(measurements.length).toBeGreaterThan(0);
        });
  
        it('with integers', () => {
          let measurements = parseMeasurements(rawMeasurements);
  
          expect(measurements[0]).toEqual(122)
        });
      });
      describe("A measurement reader", () => {
        it('with only 1 measurement, there is no increase', () => {
          let increaseNumber = calculateHowManyIncreases([5],0,0)
  
          expect(increaseNumber).toEqual(0);
        });
  
        it('with two measurements, and last one is bigger, then there will an increase', () => {
          let increaseNumber = calculateHowManyIncreases([1,2],0,0)
  
          expect(increaseNumber).toEqual(1);
        });
  
        it('with more than two documents, it will calculate the increase', () => {
          let increaseNumber = calculateHowManyIncreases([1,2,3],0,0)
  
          expect(increaseNumber).toEqual(2);
        })
  
        it('will not increase if the number has not actually increased', () => {
          let increaseNumber = calculateHowManyIncreases([199,200,208,210,200,207,240,269,260,263],0,0)
  
          expect(increaseNumber).toEqual(7);
        })
      })
      describe("A solution to the measurements", () => {
        it("wiiiiiith an answer!", () => {
          let increaseNumber = calculateHowManyIncreases(parseMeasurements(rawMeasurements),0,0)
  
          expect(increaseNumber).toEqual(1462);
        })
      })
    })

    const rawMeasurements = `122
129
116
122
135
148
151
158
161
179
197
198
187
210
211
206
207
210
211
216
222
224
222
234
237
238
239
245
276
262
268
266
293
291
293
296
298
291
292
295
297
298
297
300
297
309
315
319
320
319
323
338
349
351
352
354
348
366
365
388
385
379
381
385
391
392
405
407
415
427
433
436
439
444
450
449
453
457
459
460
467
471
474
473
477
487
489
498
512
516
507
526
544
560
570
569
580
590
591
593
596
597
598
604
599
608
603
616
649
636
649
648
653
654
655
656
664
666
669
663
661
682
681
685
693
701
727
706
704
705
706
711
716
711
721
728
724
734
733
737
736
742
743
742
744
745
749
750
760
767
787
788
787
789
785
798
796
797
798
800
807
817
829
828
830
831
863
865
867
868
893
891
881
889
890
914
918
919
925
938
941
927
928
900
901
899
901
911
919
918
922
942
928
947
945
950
956
979
989
990
1001
995
997
995
1007
1001
998
999
1008
1018
1019
1020
1019
1012
1040
1038
1029
1027
1028
1029
993
995
994
980
990
991
990
1012
1024
1037
1039
1037
1053
1029
1048
1050
1055
1058
1059
1064
1062
1087
1079
1081
1088
1090
1113
1110
1119
1123
1126
1127
1126
1131
1135
1137
1140
1142
1143
1145
1146
1147
1139
1140
1143
1136
1105
1108
1109
1098
1121
1126
1096
1090
1058
1061
1063
1068
1072
1073
1104
1111
1108
1110
1152
1153
1157
1158
1162
1167
1164
1167
1168
1169
1168
1166
1171
1172
1175
1177
1184
1187
1191
1196
1197
1193
1204
1209
1212
1213
1234
1238
1242
1257
1268
1254
1237
1228
1226
1222
1209
1211
1212
1219
1226
1227
1235
1245
1258
1264
1277
1276
1285
1288
1287
1289
1290
1291
1290
1286
1290
1285
1286
1290
1291
1286
1297
1302
1305
1304
1305
1318
1324
1347
1348
1353
1354
1371
1370
1371
1373
1369
1347
1351
1352
1371
1373
1379
1383
1390
1391
1394
1399
1398
1401
1402
1406
1409
1413
1412
1420
1423
1424
1431
1433
1420
1421
1422
1423
1439
1404
1416
1404
1423
1424
1427
1444
1420
1423
1417
1418
1414
1440
1441
1445
1469
1476
1481
1480
1484
1483
1482
1458
1459
1433
1431
1433
1426
1436
1437
1452
1454
1455
1456
1474
1463
1477
1479
1501
1496
1494
1493
1496
1505
1506
1511
1516
1517
1510
1514
1513
1509
1512
1543
1544
1526
1532
1534
1538
1540
1518
1519
1528
1530
1531
1534
1537
1551
1552
1550
1548
1545
1564
1585
1615
1618
1617
1623
1640
1638
1637
1639
1641
1672
1676
1679
1681
1678
1689
1696
1703
1704
1703
1699
1700
1719
1732
1692
1693
1698
1712
1713
1712
1705
1716
1731
1748
1749
1747
1749
1750
1768
1783
1784
1791
1793
1798
1799
1800
1807
1812
1822
1847
1852
1843
1849
1855
1870
1868
1869
1873
1875
1889
1878
1879
1880
1886
1891
1895
1891
1890
1891
1892
1897
1898
1899
1910
1897
1898
1899
1895
1892
1905
1913
1920
1921
1923
1941
1960
1962
1971
1972
1962
1965
1977
1976
1993
1995
1997
1992
1987
1993
1977
1978
1979
1974
1981
1978
1973
1977
1984
1979
1984
2027
2054
2055
2058
2060
2059
2060
2066
2062
2066
2074
2064
2065
2064
2071
2077
2078
2082
2078
2092
2093
2095
2100
2101
2104
2110
2106
2107
2113
2112
2138
2143
2151
2150
2151
2147
2169
2171
2174
2193
2196
2183
2201
2198
2199
2197
2194
2195
2206
2220
2219
2224
2242
2230
2231
2237
2255
2256
2252
2251
2259
2256
2258
2286
2291
2295
2296
2267
2275
2287
2288
2272
2269
2270
2278
2279
2282
2265
2282
2284
2292
2296
2301
2302
2319
2320
2314
2316
2317
2313
2314
2319
2314
2328
2334
2347
2352
2353
2354
2352
2354
2362
2374
2383
2382
2384
2383
2384
2388
2390
2396
2405
2406
2429
2430
2427
2460
2461
2474
2479
2493
2494
2493
2488
2489
2511
2512
2504
2520
2529
2524
2523
2536
2567
2571
2589
2594
2595
2594
2583
2568
2566
2557
2558
2559
2557
2558
2561
2582
2586
2604
2603
2604
2618
2630
2632
2633
2644
2650
2651
2666
2669
2683
2691
2686
2683
2687
2683
2684
2707
2723
2733
2739
2750
2751
2750
2754
2757
2756
2735
2736
2743
2728
2717
2689
2690
2732
2743
2746
2747
2750
2755
2756
2770
2772
2781
2789
2790
2801
2802
2799
2800
2816
2823
2822
2839
2840
2843
2852
2854
2881
2890
2901
2908
2906
2910
2896
2898
2914
2923
2936
2958
2928
2929
2928
2929
2930
2935
2942
2930
2951
2979
2992
2991
2992
3016
2993
2994
2999
3016
3017
3022
3031
3032
3033
3039
3042
3040
3041
3040
3049
3048
3050
3054
3048
3056
3061
3062
3056
3049
3062
3053
3050
3051
3053
3056
3072
3073
3068
3086
3093
3107
3104
3102
3103
3102
3104
3093
3094
3095
3097
3096
3080
3087
3103
3107
3142
3139
3138
3141
3140
3156
3161
3142
3141
3152
3154
3153
3152
3144
3150
3148
3150
3169
3151
3154
3152
3154
3162
3157
3158
3163
3169
3176
3220
3229
3224
3211
3227
3231
3234
3249
3250
3253
3259
3251
3249
3250
3251
3243
3263
3267
3275
3282
3292
3295
3263
3262
3264
3263
3262
3266
3261
3272
3245
3252
3250
3251
3252
3254
3278
3285
3292
3295
3294
3293
3314
3315
3323
3321
3334
3335
3342
3345
3346
3352
3350
3355
3358
3357
3360
3354
3357
3366
3368
3373
3374
3373
3364
3374
3380
3386
3385
3387
3400
3401
3407
3409
3426
3440
3445
3442
3452
3453
3460
3456
3465
3459
3457
3460
3459
3466
3472
3475
3474
3477
3473
3478
3477
3472
3459
3486
3494
3506
3513
3514
3518
3521
3516
3518
3516
3521
3519
3512
3513
3510
3511
3512
3538
3542
3545
3546
3548
3546
3556
3546
3549
3541
3553
3556
3560
3561
3567
3574
3580
3596
3599
3621
3620
3625
3627
3623
3624
3657
3665
3664
3672
3671
3666
3662
3655
3656
3655
3656
3661
3663
3666
3670
3672
3673
3645
3650
3644
3643
3644
3646
3644
3660
3685
3688
3684
3696
3698
3702
3707
3713
3725
3726
3728
3729
3733
3745
3739
3742
3746
3747
3748
3740
3735
3740
3735
3750
3752
3751
3731
3732
3721
3724
3725
3734
3735
3748
3747
3749
3756
3757
3756
3757
3758
3748
3730
3732
3725
3722
3711
3710
3714
3715
3712
3713
3712
3713
3714
3716
3717
3718
3716
3715
3705
3706
3713
3714
3731
3759
3757
3753
3764
3781
3788
3790
3805
3806
3809
3804
3821
3825
3826
3832
3799
3806
3819
3820
3825
3827
3830
3837
3818
3807
3811
3817
3821
3832
3833
3821
3816
3817
3819
3818
3824
3836
3837
3838
3855
3848
3849
3857
3856
3855
3868
3872
3873
3878
3896
3915
3918
3921
3925
3920
3926
3919
3920
3916
3917
3923
3936
3910
3908
3914
3915
3925
3928
3929
3930
3932
3933
3934
3946
3950
3952
3939
3938
3947
3951
3953
3954
3955
3958
3963
3972
3965
3976
3978
3979
4008
4003
4025
4028
4041
4040
4041
4044
4043
4057
4054
4049
4050
4028
4033
4014
4015
4027
4028
4036
4040
4035
4036
4037
4040
4032
4038
4037
4030
4028
4032
4031
4030
4048
4046
4060
4059
4035
4031
4033
4034
4061
4051
4052
4053
4047
4048
4049
4051
4052
4053
4061
4050
4044
4046
4049
4035
4037
4031
4028
4027
4026
4025
4023
4034
4032
4035
4036
4041
4038
4039
4032
4036
4035
4048
4068
4069
4076
4097
4098
4067
4074
4051
4052
4055
4053
4059
4074
4080
4082
4084
4085
4076
4077
4079
4082
4089
4092
4088
4092
4094
4098
4096
4093
4096
4104
4106
4102
4111
4114
4110
4111
4112
4115
4114
4116
4133
4153
4146
4148
4127
4129
4130
4135
4138
4156
4165
4182
4179
4193
4209
4221
4222
4227
4241
4243
4288
4289
4287
4290
4291
4320
4321
4322
4324
4347
4318
4325
4326
4338
4333
4335
4338
4344
4346
4353
4347
4338
4339
4300
4299
4303
4302
4300
4293
4308
4302
4286
4287
4284
4285
4286
4288
4292
4279
4280
4278
4280
4282
4284
4293
4322
4323
4338
4336
4335
4338
4344
4338
4336
4359
4358
4360
4361
4364
4366
4367
4366
4367
4369
4370
4373
4377
4376
4394
4395
4404
4409
4406
4408
4436
4439
4445
4433
4423
4409
4438
4443
4463
4475
4472
4482
4487
4513
4516
4514
4527
4528
4538
4548
4549
4547
4551
4554
4547
4549
4546
4548
4532
4517
4525
4549
4531
4526
4523
4524
4545
4532
4535
4532
4537
4542
4543
4545
4556
4561
4558
4559
4576
4583
4585
4591
4587
4597
4616
4627
4634
4645
4632
4634
4640
4671
4672
4674
4684
4682
4692
4704
4700
4689
4690
4693
4694
4703
4706
4692
4702
4703
4707
4722
4725
4727
4728
4739
4742
4755
4758
4753
4756
4768
4774
4781
4788
4789
4788
4790
4791
4780
4769
4775
4769
4743
4746
4760
4770
4771
4780
4781
4770
4767
4793
4790
4792
4791
4794
4790
4808
4814
4811
4807
4808
4810
4818
4826
4832
4839
4842
4835
4844
4865
4881
4887
4891
4874
4878
4860
4865
4870
4869
4875
4876
4877
4885
4886
4911
4912
4917
4918
4927
4909
4913
4915
4917
4928
4929
4927
4928
4929
4923
4922
4956
4968
4965
4967
4975
4976
4978
4974
4990
5021
5025
5029
5030
5028
5030
5035
5055
5038
5052
5053
5069
5046
5048
5052
5076
5092
5111
5118
5122
5133
5153
5157
5162
5165
5164
5163
5164
5165
5160
5159
5162
5164
5169
5183
5175
5207
5208
5187
5192
5197
5194
5204
5208
5213
5223
5221
5236
5237
5243
5248
5253
5238
5220
5221
5228
5226
5229
5231
5228
5230
5231
5224
5234
5235
5237
5239
5248
5250
5251
5256
5270
5271
5286
5282
5284
5282
5276
5278
5285
5303
5306
5314
5315
5317
5316
5317
5318
5324
5325
5331
5325
5355
5356
5358
5348
5341
5346
5351
5353
5376
5370
5375
5380
5384
5391
5392
5408
5415
5416
5417
5406
5407
5410
5411
5412
5416
5414
5431
5433
5434
5435
5460
5463
5464
5476
5477
5480
5481
5480
5478
5479
5470
5477
5473
5468
5493
5496
5497
5499
5501
5529
5499
5511
5542
5547
5548
5550
5582
5581
5563
5586
5590
5585
5580
5608
5614
5605
5598
5613
5611
5616
5646
5653
5662
5660
5665
5673
5675
5682
5681
5683
5701
5711
5710
5711
5713
5715
5726
5737
5733
5737
5751
5752
5747
5732
5736
5738
5739
5735
5736
5739
5741
5744
5760
5763
5755
5760
5765
5767
5772
5776
5777
5779
5760
5755
5760
5777
5781
5763
5750
5758
5753
5765
5767
5769
5802
5793
5797
5794
5792
5791
5792
5806
5812
5813
5814
5815
5814
5818
5836
5841
5848
5854
5857
5887
5888
5885
5886
5884
5883
5887
5894
5895
5896
5893
5892
5907
5906
5940
5937
5947
5949
5947
5940
5939
5956
5959
5961
5972
5979
5981
5982
5977
5978
5963
5965
5966
5972
5973
5974
5977
5980
5986
5987
5967
5979
5980
5983
5987
5989
6007
6018
6017
6018
6019
6018
6020
6021
6035
6036
6042
6049
6060
6056
6054
6052
6051
6050
6063
6064
6055
6061
6063
6062
6064
6077
6088
6108
6129
6131
6133
6137
6136
6151
6153
6158
6173
6176
6181
6197
6200
6202
6204
6209
6200
6199
6186
6210
6218
6219
6229
6240
6252
6247
6249
6250
6253
6254
6280
6283
6292
6293
6300
6301
6302
6305
6307
6321
6322
6327
6326
6327
6339
6342
6328
6329
6327
6316
6317
6323
6332
6344
6374
6395
6398
6396
6412
6421
6424
6445
6451
6453
6454
6459
6460
6461
6471
6467
6447
6449
6458
6460
6463
6464
6468
6503
6504
6505
6498
6499
6502
6490
6495
6527
6529
6533
6529
6539
6547
6560
6561
6551
6563
6567
6563
6589
6585
6588
6564
6569
6563
6591
6601
6632`

    const parseMeasurements = (rawMeasurements) => {
      return toArrayOfStrings(rawMeasurements).map(i=>parseInt(i))
    }

    const calculateHowManyIncreases = (measurements,previous,increases) => {
      if (measurements.length == 1) return increases;

      if (measurements[previous+1] > measurements[previous]) {
        increases++;
      }

      if (previous+1 < measurements.length) {
        return calculateHowManyIncreases(measurements,previous+1,increases)
      }

      return increases;
    }
});

describe('On the 2nd day of Christmas', () => {
  describe('Advent Of Code brought to me', () => {

    describe("A navigation instruction parser", () => {
      it("reads the instruction and the number", () => {
        const instruction = getInstruction("forward 5");

        expect(instruction).toEqual({
          forward : 5
        })
      })
    })
    describe('A list of navigating instructions', () => {
      it('nicely formatted', () => {
        let measurements = parseNavigation(navigationInstructions);

        expect(measurements[0]).toEqual({
          forward : 6
        });
      });
    })

    describe('A set of navigation controls', () => {
      describe('Where you can go forward', () => {
        it('once', () => {
          const navigationResult = navigate([{forward: 5}],0,{horizontal:0,depth:0});

          expect(navigationResult.horizontal).toEqual(5);
        });

        it('more than once', () => {
          const navigationResult = navigate([{forward: 5},{forward: 5},{forward: 5}],0,{horizontal:0,depth:0});

          expect(navigationResult.horizontal).toEqual(15);
        })

        it('will not increase horizontal position if it is not forward', () => {
          const navigationResult = navigate([{forward: 5},{forward: 5},{down: 5}],0,{horizontal:0,depth:0});

          expect(navigationResult.horizontal).toEqual(10);
        })
      })

      describe('Where you can go down', () => {
        it('once', () => {
          const navigationResult = navigate([{down: 5}],0,{depth:0,horizontal:0});

          expect(navigationResult.depth).toEqual(5);
        });

        it('more than once', () => {
          const navigationResult = navigate([{down: 5},{down: 5},{down: 5}],0,{depth:0,horizontal:0});

          expect(navigationResult.depth).toEqual(15);
        })

        it('will not increase depth position if it is not down', () => {
          const navigationResult = navigate([{down: 5},{down: 5},{forward: 5}],0,{depth:0,horizontal:0});

          expect(navigationResult.depth).toEqual(10);
        })
      })

      describe('Where you can go up', () => {
        it('once', () => {
          const navigationResult = navigate([{up: 5}],0,{depth:10,horizontal:0});

          expect(navigationResult.depth).toEqual(5);
        });

        it('more than once', () => {
          const navigationResult = navigate([{up: 5},{up: 5},{up: 5}],0,{depth:15,horizontal:0});

          expect(navigationResult.depth).toEqual(0);
        })

        it('will not go up if the instruction is not to go up', () => {
          const navigationResult = navigate([{down: 5},{down: 5},{forward: 5},{up: 5}],0,{depth:0,horizontal:0});

          expect(navigationResult.depth).toEqual(5);
        })
      })

      describe("Where you can check your current position", () => {
        it("at any given time", () => {
          const navigationResult = navigate(parseNavigation(navigationInstructions),0,{depth:0,horizontal:0});
          const position = getCurrentPosition(navigationResult);

          expect(position).toEqual(2215080);
        });
      });
    })
  })

  const getCurrentPosition = (position) => {
    return position.depth * position.horizontal;
  }
  
  const getInstruction = (instruction) => {
    const splitInstruction = instruction.split(" ");
    let position = {}
    position[`${splitInstruction[0]}`]= parseInt(splitInstruction[1])
    return position
  }
  
  const navigate = (instructions,previous,overallCourse) => {
    if (instructions[previous].forward)
      overallCourse.horizontal = overallCourse.horizontal + instructions[previous].forward
  
    if (instructions[previous].down)
      overallCourse.depth = overallCourse.depth + instructions[previous].down
  
    if (instructions[previous].up)
      overallCourse.depth = overallCourse.depth - instructions[previous].up
  
    if (previous+1 < instructions.length) {
      return navigate(instructions,previous+1,overallCourse)
    }
  
    return overallCourse
  }
  
  const parseNavigation = (navigationInstructions) => {
    return toArrayOfStrings(navigationInstructions).map(i=>getInstruction(i))
  }

  const navigationInstructions = `forward 6
down 8
down 5
down 9
forward 2
down 5
down 5
forward 1
forward 7
down 8
up 2
down 4
up 8
down 8
forward 3
forward 4
down 1
forward 5
up 7
down 7
down 8
forward 2
up 3
forward 1
forward 6
forward 9
forward 7
forward 8
forward 2
forward 3
up 2
up 8
down 1
forward 7
down 7
down 2
forward 6
down 1
forward 5
down 3
forward 6
down 7
up 1
up 3
forward 7
forward 6
forward 8
down 4
down 2
up 5
down 2
forward 2
up 5
forward 6
down 3
down 1
down 5
forward 6
up 6
down 7
down 8
down 2
forward 3
down 5
down 4
forward 7
forward 9
up 9
up 8
up 4
forward 8
forward 5
down 4
up 2
forward 9
up 5
down 5
up 9
forward 2
forward 3
down 6
down 8
forward 8
up 5
down 5
forward 7
forward 6
forward 8
up 3
forward 3
forward 1
up 8
down 8
down 2
down 4
up 7
up 2
up 9
up 4
forward 6
down 8
down 1
forward 6
forward 6
down 4
down 2
up 7
down 9
down 9
up 2
up 7
down 4
down 2
forward 1
down 1
up 5
up 5
forward 9
up 3
down 7
forward 7
down 4
down 8
up 1
down 4
down 7
forward 5
up 9
forward 5
forward 1
forward 8
forward 6
forward 5
forward 1
down 4
down 6
forward 5
forward 2
forward 3
down 1
up 2
up 9
forward 4
up 8
down 7
down 8
up 7
down 2
forward 7
up 1
forward 5
forward 1
forward 8
forward 1
up 8
down 6
down 7
forward 2
down 8
down 8
forward 8
up 8
down 6
down 7
down 4
down 7
forward 6
up 3
forward 3
down 2
down 8
down 3
down 9
forward 9
forward 7
down 6
down 4
forward 6
down 2
down 7
up 7
up 8
forward 2
forward 8
down 3
up 2
forward 9
down 2
up 3
down 1
down 1
down 4
down 8
up 2
up 8
forward 2
forward 1
up 1
forward 7
down 8
down 1
down 7
up 3
down 3
forward 8
forward 2
forward 7
down 2
up 9
up 3
up 5
down 4
up 3
forward 4
up 5
down 9
down 9
forward 2
forward 2
down 2
down 8
down 3
down 5
forward 6
down 6
up 5
down 2
down 4
down 9
down 3
forward 7
down 1
forward 1
down 4
up 1
down 9
forward 5
up 2
down 3
forward 8
forward 9
up 9
down 2
forward 8
down 4
down 5
forward 6
forward 5
forward 4
down 6
down 9
down 2
forward 9
down 4
up 8
up 9
up 2
up 5
up 5
forward 9
up 1
forward 6
forward 7
forward 8
forward 9
up 2
forward 3
forward 4
forward 6
forward 9
up 5
up 5
down 3
forward 1
forward 3
forward 2
forward 3
forward 6
forward 7
down 4
down 2
down 1
forward 2
down 5
forward 3
forward 6
down 8
down 9
forward 4
forward 6
down 6
down 6
forward 3
down 6
down 8
down 1
forward 7
forward 9
down 2
down 5
forward 1
forward 3
down 2
forward 1
down 8
down 1
forward 4
down 8
forward 5
forward 1
down 7
down 7
forward 3
forward 1
forward 6
forward 7
forward 5
up 1
forward 2
down 9
forward 3
up 1
forward 2
down 1
down 6
down 3
forward 7
down 5
down 4
down 1
forward 9
forward 9
down 5
forward 7
forward 3
forward 5
down 1
forward 6
down 8
up 2
forward 6
down 3
forward 2
forward 9
forward 4
down 1
down 3
forward 9
forward 3
forward 8
forward 9
up 3
up 1
forward 1
forward 2
down 8
down 9
down 2
down 1
down 3
down 2
forward 9
forward 7
down 5
forward 1
forward 6
forward 3
forward 9
down 2
forward 8
down 5
down 1
forward 5
forward 3
down 6
forward 6
down 8
forward 2
up 5
forward 1
down 2
down 6
forward 9
forward 7
down 1
down 3
down 6
up 3
down 4
forward 8
forward 1
forward 7
down 2
down 5
down 9
forward 6
down 5
forward 5
up 1
down 5
forward 8
up 9
forward 2
down 6
forward 2
forward 7
up 2
down 9
down 7
up 7
down 6
up 5
forward 1
down 8
forward 8
forward 1
forward 7
down 9
down 6
forward 3
down 6
down 1
down 1
down 1
down 3
down 7
down 7
down 3
down 5
forward 4
down 4
forward 7
forward 5
down 9
down 9
forward 7
down 3
down 9
down 4
forward 3
down 7
down 2
forward 2
down 6
forward 9
forward 9
forward 5
up 4
down 7
down 2
up 9
up 4
forward 8
forward 1
down 8
up 5
down 4
down 3
forward 2
down 7
down 2
down 1
down 9
forward 7
forward 7
up 8
up 4
down 3
down 8
forward 6
forward 5
forward 5
forward 5
down 3
down 8
forward 4
forward 7
forward 1
up 3
up 9
down 6
up 4
down 7
forward 8
forward 4
forward 3
up 8
up 3
down 3
forward 6
down 2
forward 7
forward 4
forward 8
down 3
down 9
down 9
down 2
forward 8
up 4
down 3
forward 8
forward 5
forward 7
down 6
up 9
forward 3
down 2
forward 5
forward 2
down 7
forward 6
forward 2
up 9
down 1
down 1
forward 4
up 1
forward 9
down 3
down 4
down 2
forward 3
forward 3
forward 3
up 7
up 8
down 5
forward 1
forward 7
up 9
up 3
down 3
down 8
forward 6
up 5
up 5
forward 4
down 2
down 8
down 1
forward 6
down 3
forward 3
forward 6
forward 1
up 3
up 1
down 5
down 2
down 7
down 1
forward 9
down 4
down 8
forward 9
forward 7
forward 8
down 1
down 2
up 7
down 5
down 2
down 1
up 4
up 8
up 7
down 4
forward 3
down 2
down 2
forward 5
forward 4
down 8
up 4
forward 4
up 1
down 3
down 9
down 9
down 3
up 8
forward 1
forward 6
down 6
down 2
forward 8
down 3
forward 8
forward 2
forward 9
up 3
forward 6
down 5
forward 6
forward 2
up 7
down 9
forward 2
up 2
forward 7
down 1
down 5
down 6
forward 8
down 6
forward 4
forward 1
forward 3
forward 4
up 4
forward 4
down 4
forward 2
forward 5
forward 2
forward 5
down 9
up 2
up 1
down 2
up 4
up 5
forward 2
down 3
down 9
forward 3
down 8
down 9
forward 5
down 3
forward 5
down 3
up 8
forward 7
forward 1
down 2
down 7
forward 3
down 8
forward 9
down 4
down 1
down 7
down 4
up 5
forward 1
down 4
forward 1
forward 8
up 1
up 5
up 2
up 2
down 4
down 7
forward 2
down 8
up 8
down 9
down 3
down 6
down 3
down 1
forward 7
up 8
forward 5
up 5
down 8
down 1
down 8
down 6
down 5
forward 2
up 5
down 6
forward 9
up 6
down 5
down 7
up 9
down 1
forward 4
up 6
forward 2
down 5
down 5
forward 2
up 6
forward 1
down 8
forward 4
up 8
down 3
forward 8
down 8
forward 5
down 6
down 3
forward 1
down 4
down 8
up 1
down 1
down 2
up 9
forward 2
forward 3
down 7
down 2
forward 7
up 8
down 2
down 8
down 9
up 1
down 5
down 5
down 4
down 8
down 9
up 5
forward 2
down 4
down 3
down 2
forward 5
forward 8
down 8
down 1
forward 9
down 5
forward 5
down 2
up 3
up 9
down 1
down 9
forward 7
up 7
forward 3
up 6
forward 8
down 2
down 1
down 7
forward 5
down 8
down 4
forward 7
forward 4
down 6
forward 9
down 3
forward 2
down 3
down 1
down 1
up 1
up 3
down 6
forward 3
up 9
down 4
up 2
down 3
up 1
down 8
down 5
forward 7
forward 2
forward 9
down 8
down 5
down 6
up 3
forward 2
up 8
down 4
forward 7
down 8
down 6
down 4
forward 7
up 9
down 4
forward 2
forward 5
down 3
up 6
up 6
down 2
down 4
forward 8
forward 5
forward 3
forward 5
down 5
down 5
down 6
forward 3
forward 7
forward 1
down 8
down 5
forward 7
up 7
down 9
down 9
down 9
up 6
down 2
down 3
forward 1
up 7
up 8
forward 5
down 1
down 3
down 3
forward 5
down 7
down 1
up 2
down 2
down 3
forward 7
down 9
forward 6
down 5
forward 2
down 5
forward 6
up 3
down 8
up 2
forward 5
forward 1
forward 5
forward 8
forward 6
forward 9
forward 6
up 6
up 5
down 8
down 3
down 5
down 2
forward 9
forward 8
down 1
up 1
up 6
down 6
forward 4
down 3
forward 6
forward 1
up 5
down 6
up 9
down 7
down 2
down 9
down 5
forward 5
up 2
forward 8
down 2
down 8
forward 6
down 4
forward 8
down 7
down 8
down 1
forward 3
down 6
down 9
down 3
forward 3
down 8
forward 8
down 7
forward 6
forward 8
down 8
up 7
down 1
forward 2
forward 3
down 5
up 8
down 3
down 4
down 7
forward 9
forward 7
forward 1
down 3
forward 9
down 8
forward 2
down 2
down 9
down 4
down 3
up 6
up 9
down 3
down 2
forward 5
down 3
down 2
down 8
forward 6
forward 5
up 4
forward 9
forward 8
forward 9
down 2
forward 2
up 6
forward 1
down 5
forward 2
down 8
up 2
up 3
down 3
up 2
up 1
up 5
forward 1
forward 2
down 8
up 3
down 9
forward 7
up 5
down 4
down 4
up 3
forward 2
up 5
down 4
down 4
up 5
forward 8
down 8
down 6
forward 7
down 1
down 3
down 1
forward 3
down 5
down 3
forward 3
up 2
forward 2
down 9
up 8
forward 8
up 8
forward 1
forward 9
forward 3
down 8
down 3
forward 8
forward 4
down 2
forward 2
down 2
down 5
down 7
down 5
forward 8
up 3
forward 1
down 1
forward 3
down 9
forward 2
forward 2
forward 7
down 7
down 2
forward 9
up 5
up 7
forward 8
forward 1
down 7
down 8
down 3
forward 6`
})


const toArrayOfStrings = (elements) => {
  return elements.split("\n")
}



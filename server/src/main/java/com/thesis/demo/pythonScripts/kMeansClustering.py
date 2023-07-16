import sys
import numpy as np
from sklearn.cluster import KMeans


def getDataFromFile(size):
    f = open("src/main/resources/txt/dataForClustering.txt", "r")
    data = f.read().split(",")
    data = data[:-1]
    return convertDataToArray(data,size)

def convertDataToArray(data,size):
    array = []
    helper = []
    counter = 0
    for d in data:
        if counter == size:
            array.append(helper)
            helper = []
            counter = 0
        helper.append(float('%.2f' % float(d)))
        counter += 1
    array.append(helper)
    return array

def convertClustersForReturn(data):
    returnString = ""
    for d in data:
        for a in d:
            returnString += str(float('%.2f' % float(a))) + ','
    return returnString[:-1]

def convertlabelsForReturn(data):
    returnString = ""
    for d in data:
        returnString += str(d) + ','
    return returnString[:-1]

def elbow(size,n_clusters):
    if(n_clusters == 0):
        WCSS = []
        K = range(1,10)
        for k in K:
            kMeans = KMeans(k, n_init = 100)
            kMeans.fit(getDataFromFile(size))
            WCSS.append(kMeans.inertia_)
        return findBestNumberForClusters(WCSS)
    return n_clusters


def findBestNumberForClusters(WCSS):
    distance = []
    i = 1
    while(len(WCSS) != i):
        distance.append(WCSS[i-1]-WCSS[i])
        i+=1
    index = distance.index(max(distance))
    return index + 3

def kMeans(n_clusters,size):
    kMeans = KMeans(n_clusters, init='k-means++', n_init = 100)
    kMeans.fit(getDataFromFile(size))



    return convertClustersForReturn(kMeans.cluster_centers_) , "=" , convertlabelsForReturn(kMeans.labels_)


print(kMeans(elbow(int(sys.argv[2]),int(sys.argv[1])),int(sys.argv[2])))
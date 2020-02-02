import os, sys
from quads import main
from multiprocessing import Process

img_ext = ['.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.webp']

def execute_main(dir, file):
    os.chdir(dir)
    main(file)

def do_quads(folder):
    cur_dir = os.getcwd()
    processes = []
    for root, dirs, files in os.walk(folder):
        if 'quadfile' in files:
            with open(os.path.join(root, 'quadfile')) as q:
                excluded = [x.strip() for x in q.readlines()]
                file_names = [os.path.splitext(x)[0] for x in files]
                for e in excluded:
                    if e in dirs:
                        print("Skipping dir %s" % e)
                        dirs.remove(e)
                    if e in file_names:
                        print("Skipping img %s" % e)
                        idx = 0
                        for i in range(len(files)):
                            if os.path.splitext(files[i])[0] == e:
                                idx = i
                                break
                        del(files[idx])
        # print(root.split('/')[-1], excluded, dirs)
        # input()
        for f in files:
            name = os.path.splitext(f)[0]
            ext = os.path.splitext(f)[1]
            if ext in img_ext:
                p = Process(target=execute_main, args=(root, f,))
                processes.append(p)
                p.start()
                with open(os.path.join(root, 'quadfile'), 'a+') as q:
                    q.write(name + '\n')
    for p in processes:
        p.join()
    print("Done")



if __name__ == '__main__':
    args = sys.argv[1:]
    if len(args) != 1:
        print('Usage: python main.py web_srv_folder')
        sys.exit(0)
    do_quads(args[0])

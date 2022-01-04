package work;

import java.io.BufferedReader;
import java.io.InputStreamReader;
public class link {
	public static void main(String[] args) throws Exception{
		int n=0;
		System.out.println(".....WELCOME TO OSPF.....");
		int V[]={0,1,2,3,4};
		System.out.println("The length of the V:"+V.length);
		int c[][]=new int[V.length][V.length];
		System.out.println("Enter cost Matrix:");
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		for(int i=0;i<V.length;i++)
			for(int j=0;j<V.length;j++)
				c[i][j]=Integer.parseInt(br.readLine());
		int s[]={V[0]};
		System.out.println(s[0]);
		int d[]=new int[V.length];
		for(int i=0;i<V.length;i++)
		{
			d[i]=c[0][i];
		}
		System.out.println("The cost Matrix which is entered by you:");
		for(int i=0;i<d.length;i++)
			System.out.print("\t"+d[i]);
		int v1[]=new int[V.length-s.length];
		System.out.print("the length of v1 is:\t"+v1.length);
		int x=0;
		for(int i=0;i<5;i++)
		{
			for(int j=0;j<s.length;j++)
				if(V[i]!=s[j])
				{
					v1[x]=V[i];
					x++;
				}
		}
		int w;
		System.out.print("\n The v1 values are:");
		for(int i=0;i<x;i++)
			System.out.print("\t"+(v1[i]));
		for(int i=0;i<5;i++)
		{
			int min=d[v1[0]];
			int z=v1[0];
			for(int j=1;j<v1.length;j++)
			{
				if(min>=d[v1[j]])
				{
					min=d[v1[j]];
					z=v1[j];
				}
			}
			w=z;
			System.out.println("The w value is:"+w);
			System.out.println("The s value at before inc is:\t"+s.length);
			s[n]=w;
			System.out.println("The s value at after inc is:\t"+s.length);
			for(int j=0;j<s.length;j++)
				System.out.println("The s values are:\t"+s[j]);
			int l=0;
			for(int k=0;k<V.length;k++)
			{
				for(int j=0;j<s.length;j++)
					if(V[k]!=s[j])
					{
						v1[l]=V[i];
						l++;
					}
			}
			for(int j=0;j<v1.length;j++)
			{
				d[v1[j]]=Math.min(d[v1[j]],d[w]+c[w][v1[j]]);
			}
		}
		System.out.println("The minimum cost from A to all:");
		for(int i=0;i<V.length;i++)
			System.out.println(""+V[i]+"\t"+d[V[i]]);
	}
}
